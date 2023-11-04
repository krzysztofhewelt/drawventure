import { MouseEventHandler } from 'react';
import Card from './Card.tsx';
import DifficultyLevel from './DifficultyLevel.tsx';

interface Props {
  taskName: string;
  difficulty: number;
  description: string;
  image: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const TaskCard = ({ taskName, difficulty, description, image, onClick }: Props) => {
  return (
    <div className="relative h-[200px] w-1/4 cursor-pointer" onClick={onClick}>
      <Card
        header={
          <div className="flex justify-between">
            <span className="font-bold">{taskName}</span>
            <DifficultyLevel difficulty={difficulty} />
          </div>
        }
        className="h-full w-full"
        description={description}
        image={image}
        imagePosition="left"
      />
      <div className="absolute right-0 top-0 -z-10 h-full w-3/4 rounded-normal bg-secondary"></div>
    </div>
  );
};

export default TaskCard;
