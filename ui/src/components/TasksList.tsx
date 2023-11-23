import { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import PickerDifficultyLevel from '@components/PickerDifficultyLevel';
import TaskCard from '@components/TaskCard';
import paths from '@routes/paths';

interface Task {
  id: number;
  name: string;
  description: string;
  image: string;
  difficulty: number;
}

const filterTasksByDifficulty = (tasks: Task[], difficultyLevel: number) => {
  return tasks.filter((task) => task.difficulty === difficultyLevel);
};

const TasksList = ({ tasks }: { tasks: Task[] }) => {
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const [tasksFilter, setTaskFilter] = useState(filterTasksByDifficulty(tasks, difficultyLevel));
  const navigate = useNavigate();

  useEffect(() => {
    setTaskFilter(tasks.filter((task) => task.difficulty === difficultyLevel));
  }, [difficultyLevel, tasks]);

  const handleDifficultyChange = (inputListState: number) => {
    setDifficultyLevel(inputListState);
  };

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-10">
      <PickerDifficultyLevel active={difficultyLevel} onDifficultyLevelChange={handleDifficultyChange} />
      {tasksFilter.length === 0 && <div className="text-2xl font-bold">Brak zadań...</div>}

      {tasksFilter &&
        tasksFilter.map((el) => {
          return (
            <TaskCard
              taskName={el.name}
              difficulty={el.difficulty}
              description={el.description}
              image={el.image}
              key={el.id}
              onClick={() => navigate(generatePath(paths.TASKDRAW, { id: el.id }))}
            />
          );
        })}
    </div>
  );
};

export default TasksList;
