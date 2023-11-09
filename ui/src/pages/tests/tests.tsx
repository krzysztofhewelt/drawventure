import { useState } from 'react';
import { Link } from 'react-router-dom';
import paths from '@routes/paths.ts';
import Drawer from '@components/Drawer.tsx';
import DrawingArea from '@components/DrawingArea.tsx';
import Password from '@components/Password.tsx';
import Input from '@components/Input.tsx';
import DifficultyLevel from '@components/DifficultyLevel.tsx';
import PickerDifficultyLevel from '@components/PickerDifficultyLevel.tsx';
import Card from '@components/Card.tsx';
import Button from '@components/Button.tsx';
import TaskCard from '@components/TaskCard.tsx';

export default function Tests() {
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const handleChange = (inputListState: number) => {
    console.log('Difficulty level = ', inputListState);
    setDifficultyLevel(inputListState);
  };

  return (
    <div className="flex flex-col gap-4">
      <Drawer />
      <DrawingArea />
      <div className="w-1/2">
        <Input type="email" name="email" placeholder="email" error="Podano błędny adres email" />
        <Password placeholder="hasło" name="password" />
        <Password placeholder="powtórz hasło" name="dupe_password" error="Hasła się nie zgadzają" />
      </div>
      <DifficultyLevel difficulty={1} />
      <PickerDifficultyLevel active={difficultyLevel} onDifficultyLevelChange={handleChange} />
      <Card
        className="h-[200px] w-1/4 rounded-normal bg-white shadow-extra hover:cursor-pointer"
        header={<span className="font-bold">Dostępne zadania</span>}
        description="Podejmij kolejne wyzwanie w rysowaniu"
        image="http://localhost:5173/src/assets/icons/DogPaw.svg"
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
        <Link to={paths.REGISTER} className="link_primary">
          Zarejestruj się
        </Link>
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
