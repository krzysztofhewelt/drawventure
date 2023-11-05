import Star from '@icons/Star.svg?react';
import classNames from 'classnames';

const DifficultyLevel = ({ difficulty }: { difficulty: number }) => {
  const availableLevels = [1, 2, 3];

  return (
    <div className="flex h-7 w-20 gap-2">
      {availableLevels.map((el) => {
        return <Star className={classNames(difficulty >= el && 'fill-primary')} key={el} />;
      })}
    </div>
  );
};

export default DifficultyLevel;
