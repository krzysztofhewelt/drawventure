import IconStar from '../assets/icons/Star.tsx';

const DifficultyLevel = ({ difficulty }: { difficulty: 0 | 1 | 2 | 3 }) => {
  return (
    <div className="flex h-7 gap-2">
      <IconStar className={difficulty >= 1 ? 'fill-primary' : 'fill-white'} />
      <IconStar className={difficulty >= 2 ? 'fill-primary' : 'fill-white'} />
      <IconStar className={difficulty >= 3 ? 'fill-primary' : 'fill-white'} />
    </div>
  );
};

export default DifficultyLevel;
