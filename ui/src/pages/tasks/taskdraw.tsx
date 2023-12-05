import { useParams } from 'react-router-dom';
import DrawingArea from '@components/DrawingArea';
import { t } from 'i18next';
import Button from '@components/Button';
import TaskCard from '@components/TaskCard';
import Timer from '@components/Timer';

export default function TaskDraw() {
  const { id } = useParams();

  // funkcja na pobranie tasku z firebase

  const task = {
    id: 1,
    name: 'Okrąg',
    description: 'Twoim zadaniem jest narysowanie okręgu',
    image: 'http://localhost:5173/src/assets/icons/Circle.svg',
    difficulty: 1,
  };

  return (
    <div className="mx-auto flex w-3/4 flex-col gap-10">
      <div className="h-screen">
        <DrawingArea />
      </div>

      <div className="text-right text-2xl font-bold">
        <Timer />
      </div>

      <Button type="submit" className="button_primary w-full p-2" text={t('button.submit')} />

      <TaskCard taskName={task.name} difficulty={task.difficulty} description={task.description} image={task.image} />
    </div>
  );
}
