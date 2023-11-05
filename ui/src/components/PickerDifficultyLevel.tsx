import { MouseEventHandler } from 'react';
import DifficultyLevel from './DifficultyLevel.tsx';
import classNames from 'classnames';

interface PickerDifficultyLevelProps {
  active: number;
  onDifficultyLevelChange: (difficultyLevel: number) => void;
}

interface PickerDifficultyLevelItemProps {
  difficulty: number;
  difficultyName: string;
  onClick: MouseEventHandler;
  active: boolean;
}

const PickerDifficultyLevelItem = ({ difficulty, difficultyName, onClick, active }: PickerDifficultyLevelItemProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center" onClick={onClick}>
      <DifficultyLevel difficulty={difficulty} />
      <div className={classNames(active && 'font-bold')}>{difficultyName}</div>
    </div>
  );
};

const PickerDifficultyLevel = ({ active, onDifficultyLevelChange }: PickerDifficultyLevelProps) => {
  const difficultyLevels = ['Spokojny', 'Zabawa', 'Wymagający'];

  return (
    <div className="flex w-1/4 cursor-pointer select-none gap-4 divide-x-2 divide-secondary text-sm">
      {difficultyLevels.map((el, index) => {
        return (
          <PickerDifficultyLevelItem
            difficulty={index + 1}
            onClick={() => onDifficultyLevelChange(index + 1)}
            active={active == index + 1}
            difficultyName={el}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default PickerDifficultyLevel;
