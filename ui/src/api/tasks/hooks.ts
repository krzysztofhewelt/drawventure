import { useMutation, useQuery } from '@tanstack/react-query';
import { Task } from 'types/Task';
import { classifyImage, getDoneTasks, getTask, getTodoTasks } from 'api/tasks/requests';
import { TaskScore } from 'types/TaskScore';
import { ClassifyImageRequest, ClassifyImageResponse } from '../../types/Requests/ClassifyImage';

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

export const useClassifyImageMutation = () => {
  return useMutation<ClassifyImageResponse, Error, ClassifyImageRequest>({
    mutationFn: (values: ClassifyImageRequest) =>
      classifyImage(values.image, values.taskId, values.time, values.userUid),
  });
};
