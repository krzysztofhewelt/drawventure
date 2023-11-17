import Star from '@icons/Star.svg?react';
import classNames from 'classnames';
import { difficultyLevels } from 'consts/difficultyLevel';

const DifficultyLevel = ({ difficulty }: { difficulty: number }) => {
  return (
    <div className="flex h-7 w-20 gap-2">
      {Object.values(difficultyLevels).map((difficultyLevel) => {
        return (
          <Star className={classNames(difficulty >= difficultyLevel.id && 'fill-primary')} key={difficultyLevel.id} />
        );
      })}
    </div>
  );
};

export default DifficultyLevel;
