import Star from '@icons/Star.svg?react';

const DifficultyLevel = ({ difficulty }: { difficulty: number }) => {
  const availableLevels = [1, 2, 3];

  return (
    <div className="flex h-7 w-20 gap-2">
      {availableLevels.map((el) => {
        return <Star className={difficulty >= el ? 'fill-primary' : 'fill-white'} key={el} />;
      })}
    </div>
  );
};

export default DifficultyLevel;
