import { MouseEventHandler } from 'react';
import DifficultyLevel from './DifficultyLevel';
import classNames from 'classnames';
import { difficultyLevels } from 'consts/difficultyLevel';
import { t } from 'i18next';

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
    <div className="flex w-full cursor-pointer select-none gap-4 divide-x-2 divide-secondary text-sm">
      {Object.values(difficultyLevels).map((difficultyLevel) => {
        return (
          <PickerDifficultyLevelItem
            difficulty={difficultyLevel.value}
            onClick={() => onDifficultyLevelChange(difficultyLevel.value)}
            active={active === difficultyLevel.value}
            difficultyName={t(difficultyLevel.translationKey)}
            key={difficultyLevel.id}
          />
        );
      })}
    </div>
  );
};

export default PickerDifficultyLevel;
