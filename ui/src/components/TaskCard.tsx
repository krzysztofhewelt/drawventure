import { MouseEventHandler } from 'react';
import Card from './Card';
import DifficultyLevel from './DifficultyLevel';

interface Props {
  taskName: string;
  difficulty: number;
  description: string;
  image: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const TaskCard = ({ taskName, difficulty, description, image, onClick }: Props) => {
  return (
    <div className="relative w-full cursor-pointer">
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
        onClick={onClick}
      />
      <div className="absolute right-0 top-0 -z-10 h-full w-full rounded-normal bg-secondary sm:w-[90%]"></div>
    </div>
  );
};

export default TaskCard;
