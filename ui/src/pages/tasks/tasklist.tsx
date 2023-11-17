import PickerDifficultyLevel from '@components/PickerDifficultyLevel';
import { useState } from 'react';
import TaskCard from '@components/TaskCard';
import { useNavigate } from 'react-router-dom';
import paths from '@routes/paths';

export default function TaskList() {
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const navigate = useNavigate();

  const handleDifficultyChange = (inputListState: number) => {
    setDifficultyLevel(inputListState);
    // filter lub request
  };

  const tasksExample = [
    {
      taskId: 1,
      taskName: 'Okrąg',
      description: 'Twoim zadaniem jest narysowanie okręgu',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      taskId: 2,
      taskName: 'Kwadrat',
      description: 'Twoim zadaniem jest narysowanie kwadratu',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      taskId: 3,
      taskName: 'Trójkąt',
      description: 'Twoim zadaniem jest narysowanie przedstawionej figury',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      taskId: 4,
      taskName: 'Pięciokąt',
      description: 'Twoim zadaniem jest narysowanie przedstawionej figury',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      taskId: 5,
      taskName: 'Sześciokąt',
      description: 'Twoim zadaniem jest narysowanie okręgu',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      taskId: 6,
      taskName: 'Siedmiokąt',
      description: 'Twoim zadaniem jest narysowanie przedstawionej figury',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
  ];

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-10">
      <PickerDifficultyLevel active={difficultyLevel} onDifficultyLevelChange={handleDifficultyChange} />
      {tasksExample.map((el) => {
        return (
          <TaskCard
            taskName={el.taskName}
            difficulty={difficultyLevel}
            description={el.description}
            image={el.image}
            key={el?.taskId}
            onClick={() => navigate(paths.TASKDRAW, { id: el.taskId })}
          />
        );
      })}
    </div>
  );
}
