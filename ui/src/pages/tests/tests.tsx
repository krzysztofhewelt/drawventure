import PickerDifficultyLevel from '../../components/PickerDifficultyLevel.tsx';
import Card from '../../components/Card.tsx';
import DifficultyLevel from '../../components/DifficultyLevel.tsx';
import Password from '../../components/Password.tsx';
import Toolbox from '../../components/Toolbox.tsx';
import Button from '../../components/Button.tsx';
import Input from '../../components/Input.tsx';
import TaskCard from '../../components/TaskCard.tsx';
import Drawer from '../../components/Drawer.tsx';
import Hamburger from '@icons/Hamburger.svg?react';
import { useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function Tests() {
  const [drawer, setDrawer] = useState(false);

  const handleChange = (inputListState: number) => {
    console.log('Input list state = ', inputListState);
  };

  return (
    <div className="flex flex-col gap-4">
      <Hamburger
        className="fixed right-0 z-50 w-24 cursor-pointer fill-primary p-4"
        onClick={() => setDrawer(!drawer)}
      />

      <Drawer isOpen={drawer} />
      <div className="flex flex-col items-center justify-center">
        <Toolbox canDownload={true} />
        <div className="h-[500px] w-1/2">
          <ReactSketchCanvas strokeWidth={4} strokeColor="red" />
        </div>
      </div>

      <div className="w-1/2">
        <Input type="email" name="email" placeholder="email" />
        <Password placeholder="hasło" name="password" />
        <Password placeholder="powtórz hasło" name="dupe_password" />
      </div>
      <DifficultyLevel difficulty={1} />
      <PickerDifficultyLevel active={1} onClick={handleChange} />
      <Card
        className="h-[200px] w-1/4 rounded-normal bg-white shadow-extra hover:cursor-pointer"
        header={<span className="font-bold">Dostępne zadania</span>}
        description="Podejmij kolejne wyzwanie w rysowaniu"
        image="http://localhost:5173/src/assets/icons/Lapa.svg"
        imagePosition="right"
        onClick={() => alert('Przejście do zadania')}
      />
      <Button text="Sprawdź inne zadania" className="button_primary" onClick={() => alert('Tak')} />
      <Button text="Spróbuj ponownie" className="button_secondary" onClick={() => alert('Nie')} />
      <TaskCard
        taskName="Okrąg"
        difficulty={1}
        description="Twoim zadaniem jest narysowanie okręgu"
        image="http://localhost:5173/src/assets/icons/DogPaw.svg"
        onClick={() => alert('Inne przejście...')}
      />
      <div>
        <br />
        Link 1.:{' '}
        <a href="" className="link_primary">
          Zarejestruj się
        </a>
        <br />
        Link 2.:{' '}
        <a href="" className="link_secondary">
          Nie pamiętasz hasła?
        </a>
        <br />
        Link 3.:{' '}
        <a href="" className="link_secondary">
          Sprawdź swoje wyniki &rarr;
        </a>
      </div>
    </div>
  );
}
