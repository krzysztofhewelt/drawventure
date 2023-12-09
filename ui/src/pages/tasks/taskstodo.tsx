import TasksList from '@components/TasksList';

interface Task {
  id: number;
  name: string;
  description: string;
  image: string;
  difficulty: number;
}

export default function TasksTodo() {
  const tasks: Task[] = [
    {
      id: 1,
      name: 'Okrąg',
      description: 'Twoim zadaniem jest narysowanie okręgu',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      id: 2,
      name: 'Kwadrat',
      description: 'Twoim zadaniem jest narysowanie kwadratu',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      id: 3,
      name: 'Trójkąt',
      description: 'Twoim zadaniem jest narysowanie przedstawionej figury',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 1,
    },
    {
      id: 4,
      name: 'Pięciokąt',
      description: 'Twoim zadaniem jest narysowanie przedstawionej figury',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 3,
    },
    {
      id: 5,
      name: 'Sześciokąt',
      description: 'Twoim zadaniem jest narysowanie okręgu',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 3,
    },
    {
      id: 6,
      name: 'Siedmiokąt',
      description: 'Twoim zadaniem jest narysowanie przedstawionej figury',
      image: 'http://localhost:5173/src/assets/icons/Circle.svg',
      difficulty: 3,
    },
  ];

  return (
    <>
      <TasksList tasks={tasks} />
    </>
  );
}
