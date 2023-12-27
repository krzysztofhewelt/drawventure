import TasksList from '@components/TasksList';
import TaskService from 'services/TaskService';
import LoadingScreen from '@components/LoadingScreen';
import { useQuery } from '@tanstack/react-query';
import { Task } from 'types/Task';
import { t } from 'i18next';

export default function TaskTodo() {
  const tasksFetcher = new TaskService();
  const { data, isLoading, isError } = useQuery<Task[]>({
    queryKey: ['tasksTodo'],
    queryFn: tasksFetcher.getTodoTasks,
  });

  if (isLoading) return <LoadingScreen />;
  if (isError) return <div className="error">{t('firebase.unknown-error')}</div>;

  return (
    <>
      <TasksList tasks={data} />
    </>
  );
}
