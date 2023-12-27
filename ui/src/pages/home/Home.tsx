import Card from '@components/Card';
import { t } from 'i18next';
import paths from '@routes/paths';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex max-h-screen flex-col gap-10">
        <Card
          className="flex-1 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header={t('mainPageCards.availableTasksTitle')}
          description={t('mainPageCards.availableTasksDescription')}
          image="/src/assets/icons/DogPaw.svg"
          imagePosition="right"
          onClick={() => navigate(paths.TASKS_TODO)}
        />

        <Card
          className="flex-1 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header={t('mainPageCards.finishedTasksTitle')}
          description={t('mainPageCards.finishedTasksDescription')}
          image="/src/assets/icons/PlayfulCatOne.svg"
          imagePosition="right"
          onClick={() => navigate(paths.TASKS_DONE)}
        />

        <Card
          className="flex-1 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header={t('mainPageCards.sandboxTitle')}
          description={t('mainPageCards.sandboxDescription')}
          image="/src/assets/icons/PlayfulCatTwo.svg"
          imagePosition="right"
          onClick={() => navigate(paths.PLAYGROUND)}
        />
      </div>
    </>
  );
}
