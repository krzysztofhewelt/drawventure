import TasksList from '@components/TasksList';
import LoadingScreen from '@components/LoadingScreen';
import { t } from 'i18next';
import { useGetTodoTasksQuery } from 'api/tasks/hooks';
import CatsBalloons from '@icons/CatsBalloons.svg?react';
import { Link } from 'react-router-dom';
import paths from '@routes/paths';

export default function TaskTodo() {
  const { data, isLoading, isError } = useGetTodoTasksQuery();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <div className="error">{t('firebase.unknown-error')}</div>;

  return (
    <>
      {data?.length === 0 ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <CatsBalloons className="w-1/2 lg:w-1/4" />
          <div className="text-2xl font-medium">{t('tasks.noTasksTodo')}</div>
          <Link to={paths.TASKS_DONE} className="button_primary !w-fit">
            {t('button.task.checkTasksFinished')}
          </Link>
        </div>
      ) : (
        <TasksList tasks={data} />
      )}
    </>
  );
}
