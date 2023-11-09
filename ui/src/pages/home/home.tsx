import Drawer from '@components/Drawer.tsx';
import Card from '@components/Card.tsx';
import { t } from 'i18next';

export default function Home() {
  return (
    <>
      <Drawer />
      <div className="flex flex-col gap-10 p-14">
        <div className="flex flex-col gap-0 leading-none">
          {t('header.welcome')}
          <span className="block text-xl font-bold">Jacek</span>
          {t('header.mainPage')}
        </div>

        <Card
          className="h-40 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header={t('mainPageCards.availableTasksTitle')}
          description={t('mainPageCards.availableTasksDescription')}
          image="http://localhost:5173/src/assets/icons/DogPaw.svg"
          imagePosition="right"
          onClick={() => alert('Przejscie do zadań')}
        />

        <Card
          className="h-40 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header={t('mainPageCards.finishedTasksTitle')}
          description={t('mainPageCards.finishedTasksDescription')}
          image="http://localhost:5173/src/assets/icons/PlayfulCatOne.svg"
          imagePosition="right"
          onClick={() => alert('Przejscie do zrealizowanych zadań')}
        />

        <Card
          className="h-40 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header={t('mainPageCards.sandboxTitle')}
          description={t('mainPageCards.sandboxDescription')}
          image="http://localhost:5173/src/assets/icons/PlayfulCatTwo.svg"
          imagePosition="right"
          onClick={() => alert('Przejście do sandboxu')}
        />
      </div>
    </>
  );
}
