import { generatePath, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import DogPaws from '@icons/DogPaws.svg?react';
import { t } from 'i18next';
import paths from '@routes/paths';
import TimeFormat from '@components/TimeFormat';

export default function TaskFinished() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <Navigate to={paths.ROOT} />;

  return (
    <div className="mx-auto flex flex-col items-center gap-4 text-center">
      <DogPaws className="w-1/2 lg:w-1/4" />
      <div className="text-3xl">{t('tasks.goodJob')}</div>
      <div>
        <div>
          {t('tasks.sketchingTime')} <TimeFormat time={state?.time} />
        </div>
        <div>{t('tasks.sketchingAccuracy', { accuracy: Math.round(state?.accuracy) })}</div>
        <div>{t('tasks.score', { score: state?.score })}</div>
      </div>
      <Link to={paths.TASKS_DONE} className="link_secondary">
        {t('tasks.checkSelfResults')} &rarr;
      </Link>
      <div className="flex w-full gap-4 lg:w-2/3">
        <Link to={paths.TASKS_TODO} className="button_primary">
          {t('button.task.checkOther')}
        </Link>
        <button className="button_secondary" onClick={() => navigate(generatePath(paths.TASK_DRAW, { id: state?.id }))}>
          {t('button.task.tryAgain')}
        </button>
      </div>
    </div>
  );
}
