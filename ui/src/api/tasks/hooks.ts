import { useQuery } from '@tanstack/react-query';
import { Task } from 'types/Task';
import { getDoneTasks, getTask, getTodoTasks } from 'api/tasks/requests';
import { TaskScore } from 'types/TaskScore';

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
