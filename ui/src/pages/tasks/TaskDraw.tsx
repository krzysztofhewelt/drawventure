import DrawingArea from '@components/DrawingArea';
import { t } from 'i18next';
import Button from '@components/Button';
import TaskCard from '@components/TaskCard';
import TaskService from 'services/TaskService';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import LoadingScreen from '@components/LoadingScreen';
import paths from '@routes/paths';

export default function TaskDraw() {
  const { id } = useParams();
  const startTime = new Date().getTime();
  const navigate = useNavigate();

  const tasksFetcher = new TaskService();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['task', id],
    queryFn: () => tasksFetcher.getTask(Number(id)),
  });

  if (isLoading) return <LoadingScreen />;
  if (isError) return <div className="error">{t('firebase.unknown-error')}</div>;
  if (!data) return <Navigate to={paths.ROOT} />;

  const handleSubmit = () => {
    const date = (new Date().getTime() - startTime) / 1000;
    // *************************
    // REQUEST DO BACKENDU
    // *************************
    navigate(paths.TASK_FINISHED, { state: { id: id, time: date, accuracy: 90 } });
  };

  return (
    <div className="mx-auto flex w-3/4 flex-col gap-10">
      <div className="flex h-screen">
        <DrawingArea timer={startTime} />
      </div>

      <Button type="submit" className="button_primary w-full" text={t('button.submit')} onClick={handleSubmit} />

      <TaskCard
        taskName={data?.name}
        difficulty={data?.difficulty}
        description={data?.description}
        image={data?.image}
      />
    </div>
  );
}
