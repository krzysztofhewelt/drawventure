import DrawingArea from '@components/DrawingArea';
import { t } from 'i18next';
import Button from '@components/Button';
import TaskCard from '@components/TaskCard';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import LoadingScreen from '@components/LoadingScreen';
import paths from '@routes/paths';
import { useClassifyImageMutation, useGetTaskQuery } from 'api/tasks/hooks';
import { ReactSketchCanvasRef } from 'react-sketch-canvas';
import React from 'react';
import { convertImageToBlob } from '@lib/downloadImage';

export default function TaskDraw() {
  const startTime = new Date().getTime();
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = React.createRef<ReactSketchCanvasRef>();

  const { data: taskData, isLoading: taskLoading, isError: taskError } = useGetTaskQuery(Number(id));
  const { mutateAsync: resultMutate, isPending: resultLoading, isError: resultError } = useClassifyImageMutation();

  if (taskLoading || resultLoading) return <LoadingScreen />;
  if (taskError || resultError) return <div className="error">{t('firebase.unknown-error')}</div>;
  if (!taskData) return <Navigate to={paths.ROOT} />;

  const getImageBlob = async () => {
    const image = ref.current?.exportImage;
    if (image) return convertImageToBlob(await image('png'));
    return null;
  };

  const handleSubmit = async () => {
    const elapsedTime = (new Date().getTime() - startTime) / 1000;
    const image = await getImageBlob();

    if (!image || !id) return;

    const resultData = await resultMutate({
      image: image,
      taskId: id,
      time: elapsedTime.toString(),
      label: taskData?.label,
      type: taskData?.type,
    });

    navigate(paths.TASK_FINISHED, {
      state: { id: id, time: elapsedTime, accuracy: resultData?.accuracy * 100, score: resultData?.score },
    });
  };

  return (
    <div className="mx-auto flex w-3/4 flex-col gap-10">
      <div className="flex h-screen">
        <DrawingArea sketchRef={ref} timer={startTime} />
      </div>

      <Button type="submit" className="button_primary w-full" text={t('button.submit')} onClick={handleSubmit} />

      <TaskCard
        taskName={taskData?.name}
        difficulty={taskData?.difficulty}
        description={taskData?.description}
        image={taskData?.image}
      />
    </div>
  );
}
