import TasksList from '@components/TasksList';
import CatsBalloons from '@icons/CatsBalloons.svg?react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import TaskService from 'services/TaskService';
import { useQuery } from '@tanstack/react-query';
import LoadingScreen from '@components/LoadingScreen';
import paths from '@routes/paths';
import { Task } from 'types/Task';

export default function TaskDone() {
  const tasksFetcher = new TaskService();
  const { data, isLoading, isError } = useQuery<Task[]>({
    queryKey: ['tasksDone'],
    queryFn: tasksFetcher.getDoneTasks,
  });

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
