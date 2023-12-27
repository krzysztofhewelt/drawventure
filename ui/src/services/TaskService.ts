import { collection, getDocs, limit, query, QuerySnapshot, where } from 'firebase/firestore';
import { db } from '@lib/firebase';
import { Task } from 'types/Task';
import { getAuth } from 'firebase/auth';
import { fsDataConverter } from 'consts/fsDataConverter';
import { Score } from 'types/Score';
import { TaskScore } from 'types/TaskScore';

class TaskService {
  // get user's done tasks ID's
  getDoneTasksIds = (userScores: QuerySnapshot<Score>): number[] => {
    const tasksIds = new Set<number>();

    userScores.forEach((doc) => {
      tasksIds.add(doc.data().taskId);
    });

    return [...tasksIds];
  };

  getUserScores = async (): Promise<QuerySnapshot<Score>> => {
    const loggedUserUid = getAuth().currentUser?.uid;

    const q = query(collection(db, 'scores'), where('userUid', '==', loggedUserUid)).withConverter<Score>(
      fsDataConverter<Score>()
    );
    return await getDocs(q);
  };

  getDoneTasks = async (): Promise<TaskScore[]> => {
    const userScores = await this.getUserScores();
    const tasksIds = this.getDoneTasksIds(userScores);
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

  getTodoTasks = async (): Promise<Task[]> => {
    const userScores = await this.getUserScores();
    const tasksIds = this.getDoneTasksIds(userScores);
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

  getTask = async (id: number): Promise<Task | null> => {
    const q = query(collection(db, 'tasks'), where('id', '==', id), limit(1)).withConverter<Task>(
      fsDataConverter<Task>()
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.length > 0 ? snapshot.docs[0].data() : null;
  };

  // send task to the backend
  sendImageForResult = async (image: string, taskId: string, time: string) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('taskId', taskId);
    formData.append('time', time);

    const options = {
      method: 'POST',
      body: formData,
    };

    return await fetch(import.meta.env.VITE_BACKEND_URL, options);
  };
}

export default TaskService;
