import { useState } from 'react';
import { Link } from 'react-router-dom';
import paths from '@routes/paths';
import DrawingArea from '@components/DrawingArea';
import DifficultyLevel from '@components/DifficultyLevel';
import PickerDifficultyLevel from '@components/PickerDifficultyLevel';
import Card from '@components/Card';
import Button from '@components/Button';
import TaskCard from '@components/TaskCard';

export default function Tests() {
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const handleChange = (inputListState: number) => {
    setDifficultyLevel(inputListState);
  };

  return (
    <div className="flex flex-col gap-4">
      <DrawingArea />
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
