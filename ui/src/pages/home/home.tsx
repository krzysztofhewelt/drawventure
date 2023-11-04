import Card from '../../components/Card.tsx';
import Drawer from '../../components/Drawer.tsx';
import { useState } from 'react';
import Hamburger from '@icons/Hamburger.svg?react';

export default function Home() {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Hamburger
        className="fixed right-0 top-0 z-50 w-24 cursor-pointer fill-primary p-4"
        onClick={() => setDrawer(!drawer)}
      />

      <Drawer isOpen={drawer} />

      <div className="flex flex-col gap-10 p-14">
        <div className="flex flex-col gap-0 leading-none">
          Hej
          <span className="block text-xl font-bold">Jacek</span>
          Co dziś zmalujesz?
        </div>

        <Card
          className="h-40 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header="Dostępne zadania"
          description="Podejmij kolejne wyzwanie w rysowaniu"
          image="http://localhost:5173/src/assets/icons/DogPaw.svg"
          imagePosition="right"
          onClick={() => alert('Przejscie do zadań')}
        />

        <Card
          className="h-40 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header="Zrealizowane zadania"
          description="Zobacz jak poradziłeś sobie z poprzednimi zadaniami"
          image="http://localhost:5173/src/assets/icons/PlayfulCatOne.svg"
          imagePosition="right"
          onClick={() => alert('Przejscie do zrealizowanych zadań')}
        />

        <Card
          className="h-40 rounded-normal bg-white shadow-extra hover:cursor-pointer"
          header="Po prostu maluj"
          description="Chcesz po prostu się pobawić?"
          image="http://localhost:5173/src/assets/icons/PlayfulCatTwo.svg"
          imagePosition="right"
          onClick={() => alert('Przejście do sandboxu')}
        />
      </div>
    </>
  );
}
