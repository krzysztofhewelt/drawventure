import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import PickerDifficultyLevel from '@components/PickerDifficultyLevel';
import TaskCard from '@components/TaskCard';
import paths from '@routes/paths';
import { Task } from 'types/Task';
import { TaskScore } from 'types/TaskScore';
import { t } from 'i18next';
import TimeFormat from '@components/TimeFormat';

const TasksList = ({ tasks }: { tasks?: Task[] | TaskScore[] }) => {
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const navigate = useNavigate();
  const filteredTasks = tasks?.filter((task) => task.difficulty === difficultyLevel);

  const handleDifficultyChange = (inputListState: number) => {
    setDifficultyLevel(inputListState);
  };

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-10">
      <PickerDifficultyLevel active={difficultyLevel} onDifficultyLevelChange={handleDifficultyChange} />
      {filteredTasks?.length === 0 && <div className="text-2xl font-bold">{t('tasks.noTasks')}</div>}
      {filteredTasks &&
        filteredTasks.map((el: TaskScore | Task) => {
          return (
            <TaskCard
              taskName={el.name}
              difficulty={el.difficulty}
              description={
                ('time' in el && 'accuracy' in el && (
                  <div className="flex flex-col">
                    <div>
                      {t('tasks.sketchingTime')} <TimeFormat time={el.time} />
                    </div>
                    <div>{t('tasks.sketchingAccuracy', { accuracy: Math.round(el.accuracy * 100) })}</div>
                    <div>{t('tasks.score', { score: el.score })}</div>
                    <div className="font-bold">{t('tasks.tryAgain')} &rarr;</div>
                  </div>
                )) ||
                el.description
              }
              image={el.image}
              key={el.id}
              onClick={() => navigate(generatePath(paths.TASK_DRAW, { id: el.id }))}
            />
          );
        })}
    </div>
  );
};

export default TasksList;
