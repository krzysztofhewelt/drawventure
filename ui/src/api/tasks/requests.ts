import { collection, getDocs, limit, query, QuerySnapshot, where } from 'firebase/firestore';
import { Score } from 'types/Score';
import { getAuth } from 'firebase/auth';
import { db } from '@lib/firebase';
import { fsDataConverter } from 'consts/fsDataConverter';
import { TaskScore } from 'types/TaskScore';
import { Task } from 'types/Task';
import { ClassifyImageResponse } from '../../types/Requests/ClassifyImage';

export const getDoneTasksIds = (userScores: QuerySnapshot<Score>): number[] => {
  const tasksIds = new Set<number>();

  userScores.forEach((doc) => {
    tasksIds.add(doc.data().taskId);
  });

  return [...tasksIds];
};

export const getUserScores = async (): Promise<QuerySnapshot<Score>> => {
  const loggedUserUid = getAuth().currentUser?.uid;

  const q = query(collection(db, 'scores'), where('userUid', '==', loggedUserUid)).withConverter<Score>(
    fsDataConverter<Score>()
  );

  return await getDocs(q);
};

export const getDoneTasks = async (): Promise<TaskScore[]> => {
  const userScores = await getUserScores();
  const tasksIds = getDoneTasksIds(userScores);
  if (tasksIds.length === 0) return [];

  const q = query(collection(db, 'tasks'), where('id', 'in', tasksIds)).withConverter<Task>(fsDataConverter<Task>());

  const snapshot = await getDocs(q);
  const tasks: Task[] = [];
  snapshot.forEach((doc) => tasks.push(doc.data()));

  const scores: Score[] = [];
  userScores.forEach((doc) => {
    scores.push(doc.data());
  });

  return tasks.map((item) =>
    Object.assign(
      item,
      scores.find((o) => o.taskId === item.id)
    )
  );
};

export const getTodoTasks = async (): Promise<Task[]> => {
  const userScores = await getUserScores();
  const tasksIds = getDoneTasksIds(userScores);
  const operator = tasksIds.length > 0 ? 'not-in' : '!=';

  const q = query(collection(db, 'tasks'), where('id', operator, tasksIds)).withConverter<Task>(
    fsDataConverter<Task>()
  );

  const snapshot = await getDocs(q);
  const tasks: Task[] = [];

  snapshot.forEach((doc) => {
    tasks.push(doc.data());
  });

  return tasks;
};

export const getTask = async (id: number): Promise<Task | null> => {
  const q = query(collection(db, 'tasks'), where('id', '==', id), limit(1)).withConverter<Task>(
    fsDataConverter<Task>()
  );
  const snapshot = await getDocs(q);

  return snapshot.docs.length > 0 ? snapshot.docs[0].data() : null;
};

// send task to the backend
export const classifyImage = async (
  image: Blob,
  taskId: string,
  time: string,
  userUid: string
): Promise<ClassifyImageResponse> => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('taskId', taskId);
  formData.append('time', time);
  formData.append('userUid', userUid);

  const options = {
    method: 'POST',
    body: formData,
  };

  return await fetch(import.meta.env.VITE_BACKEND_URL, options).then((res) => {
    return res.json() as Promise<ClassifyImageResponse>;
  });
};
