import { useMutation, useQuery } from '@tanstack/react-query';
import { Task } from 'types/Task';
import { getDoneTasks, getTask, getTodoTasks, sendImageForResult } from 'api/tasks/requests';
import { TaskScore } from 'types/TaskScore';

interface ClassifyRequest {
  image: Blob;
  taskId: string;
  time: string;
  label: string;
  type: string;
}

export const useGetDoneTasksQuery = () => {
  return useQuery<TaskScore[]>({
    queryKey: ['tasksDone'],
    queryFn: getDoneTasks,
  });
};

export const useGetTodoTasksQuery = () => {
  return useQuery<Task[]>({
    queryKey: ['tasksTodo'],
    queryFn: getTodoTasks,
  });
};

export const useGetTaskQuery = (id: number) => {
  return useQuery<Task | null>({
    queryKey: ['task', id],
    queryFn: () => getTask(id),
  });
};

export const useSendImageForResultMutation = () => {
  return useMutation({
    mutationFn: (values: ClassifyRequest) =>
      sendImageForResult(values.image, values.taskId, values.time, values.label, values.type),
  });
};
