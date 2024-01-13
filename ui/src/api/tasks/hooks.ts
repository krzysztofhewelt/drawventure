import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
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


// TODO:
// define this result for sendImageForResult in ui/src/api/tasks/requests.ts
type SendImageForResult = unknown

export const useSendImageForResultMutation = (options?: Omit<UseMutationOptions<SendImageForResult, unknown, ClassifyRequest>, 'mutationFn'>) => {
  return useMutation({
    mutationFn: (values: ClassifyRequest) =>
      sendImageForResult(values.image, values.taskId, values.time, values.label, values.type),
      ...options
  });
};
