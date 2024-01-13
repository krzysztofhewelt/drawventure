import DrawingArea from '@components/DrawingArea';
import { t } from 'i18next';
import Button from '@components/Button';
import TaskCard from '@components/TaskCard';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import LoadingScreen from '@components/LoadingScreen';
import paths from '@routes/paths';
import { useGetTaskQuery, useSendImageForResultMutation } from 'api/tasks/hooks';
import { ReactSketchCanvasRef } from 'react-sketch-canvas';
import React, { useState } from 'react';
import { convertImageToBlob } from '@lib/downloadImage';

export default function TaskDraw() {
  const [startTime] = useState(new Date().getTime());
  const [finalTime, setFnTime] = useState<string>();
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = React.createRef<ReactSketchCanvasRef>();

  const { data: taskData, isLoading: taskLoading, isError: taskError } = useGetTaskQuery(Number(id));
  const {
    mutateAsync: resultMutate,
    isPending: resultLoading,
    isError: resultError,
  } = useSendImageForResultMutation();

  if (taskLoading || resultLoading) return <LoadingScreen />;
  if (taskError || resultError) return <div className="error">{t('firebase.unknown-error')}</div>;
  if (!taskData) return <Navigate to={paths.ROOT} />;

  const getImageBlob = async () => {
    const image = ref.current?.exportImage;

    if (image) return convertImageToBlob(await image('png'));

    return null;
  };

  const handleSubmit = async () => {
    const calculatedTime = (new Date().getTime() - startTime) / 1000;
    const image = await getImageBlob();

    setFnTime('dupa');

    console.log('startTime', startTime);
    console.log('calculated', calculatedTime);
    console.log('finalTime', finalTime);

    if (!image || !id) {
      return

    }

    try {
      const resultData = await resultMutate({
        image: image,
        taskId: id,
        time: String(calculatedTime),
        label: taskData?.label,
        type: taskData?.type,
      });

      navigate(paths.TASK_FINISHED, { state: { id: id, time: calculatedTime, accuracy: resultData?.accuracy * 100 } });
    } catch (e) {
      // handle error
    }


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
