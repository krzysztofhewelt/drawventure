import TasksList from '@components/TasksList';
import CatsBalloons from '@icons/CatsBalloons.svg?react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import LoadingScreen from '@components/LoadingScreen';
import paths from '@routes/paths';
import { useGetDoneTasksQuery } from 'api/tasks/hooks';

export default function TaskDone() {
  const { data, isLoading, isError } = useGetDoneTasksQuery();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <div className="error">{t('firebase.unknown-error')}</div>;

  return (
    <>
      {data?.length === 0 ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <CatsBalloons className="w-1/2 lg:w-1/4" />
          <div className="text-2xl font-medium">{t('tasks.noTasksFinished')}</div>
          <Link to={paths.TASKS_TODO} className="button_primary !w-fit">
            {t('button.task.checkTasks')}
          </Link>
        </div>
      ) : (
        <TasksList tasks={data} />
      )}
    </>
  );
}
