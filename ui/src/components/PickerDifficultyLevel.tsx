import { MouseEventHandler } from 'react';
import DifficultyLevel from './DifficultyLevel.tsx';
import classNames from 'classnames';
import { difficultyLevels } from '../consts/difficultyLevel.ts';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div className="flex w-1/4 cursor-pointer select-none gap-4 divide-x-2 divide-secondary text-sm">
      {Object.values(difficultyLevels).map((difficultyLevel) => {
        return (
          <PickerDifficultyLevelItem
            difficulty={difficultyLevel.value}
            onClick={() => onDifficultyLevelChange(Number(difficultyLevel.value))}
            active={active === Number(difficultyLevel.value)}
            difficultyName={t(difficultyLevel.translationKey)}
            key={difficultyLevel.id}
          />
        );
      })}
    </div>
  );
};

export default PickerDifficultyLevel;
