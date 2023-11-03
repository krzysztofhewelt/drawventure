import React, { SetStateAction, useEffect, useState } from 'react';
import DifficultyLevel from './DifficultyLevel.tsx';

const PickerDifficultyLevel: React.FC<{ active: 0 | 1 | 2 | 3; onClick: React.MouseEvent<HTMLDivElement, number> }> = ({
  active,
  onClick,
}) => {
  const [state, setState] = useState(0);
  // const levels = ['Spokojny', 'Zabawa', 'Wymagający'];

  useEffect(() => onClick(state), [onClick, state]);

  const editState = (element: SetStateAction<number>) => {
    setState(element);
  };

  return (
    <div className="flex w-1/4 cursor-pointer select-none gap-4 divide-x-2 divide-secondary text-sm">
      <div className="flex flex-1 flex-col items-center gap-2" onClick={() => editState(1)}>
        <DifficultyLevel difficulty={1} />
        <div className={active == 1 ? 'font-bold' : ''}>Spokojny</div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2" onClick={() => editState(2)}>
        <DifficultyLevel difficulty={2} />
        <div className={active == 2 ? 'font-bold' : ''}>Zabawa</div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2" onClick={() => editState(3)}>
        <DifficultyLevel difficulty={3} />
        <div className={active == 3 ? 'font-bold' : ''}>Wymagający</div>
      </div>
    </div>
  );
};

export default PickerDifficultyLevel;
