import { MouseEventHandler } from 'react';
import DifficultyLevel from './DifficultyLevel.tsx';
import classNames from 'classnames';
import { difficultyLevel } from '../consts/difficultyLevel.ts';

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
  return (
    <div className="flex w-1/4 cursor-pointer select-none gap-4 divide-x-2 divide-secondary text-sm">
      {Object.entries(difficultyLevel).map(([key, value]) => {
        return (
          <PickerDifficultyLevelItem
            difficulty={Number(key)}
            onClick={() => onDifficultyLevelChange(Number(key))}
            active={active == Number(key)}
            difficultyName={value}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default PickerDifficultyLevel;
