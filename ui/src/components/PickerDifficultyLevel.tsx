import React from 'react';
import DifficultyLevel from './DifficultyLevel.tsx';

const PickerDifficultyLevel: React.FC<{ active: 0 | 1 | 2 | 3 }> = ({ active }) => {
  return (
    <div className="divide-secondary flex w-1/2 gap-4 divide-x-2 text-center">
      <div className="flex flex-1 flex-col gap-2">
        <DifficultyLevel difficulty={1} />
        <div className={active == 1 ? 'font-bold' : ''}>Spokojny</div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <DifficultyLevel difficulty={2} />
        <div className={active == 2 ? 'font-bold' : ''}>Zabawa</div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <DifficultyLevel difficulty={3} />
        <div className={active == 3 ? 'font-bold' : ''}>Wymagający</div>
      </div>
    </div>
  );
};

export default PickerDifficultyLevel;
