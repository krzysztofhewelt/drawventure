import TasksList from '@components/TasksList';
import LoadingScreen from '@components/LoadingScreen';
import { t } from 'i18next';
import { useGetTodoTasksQuery } from 'api/tasks/hooks';

export default function TaskTodo() {
  const { data, isLoading, isError } = useGetTodoTasksQuery();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <div className="error">{t('firebase.unknown-error')}</div>;

  return (
    <>
      <TasksList tasks={data} />
    </>
  );
}
