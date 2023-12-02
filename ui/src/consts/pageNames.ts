import paths from '@routes/paths';

export const pageNames = {
  [paths.ROOT]: 'pageNames.main',
  [paths.TASKS_TODO]: 'pageNames.tasksTodo',
  [paths.TASK_DRAW]: 'pageNames.taskDraw',
  [paths.TASK_FINISHED]: 'pageNames.taskFinished',
  [paths.TASKS_DONE]: 'pageNames.taskFinishedList',
  [paths.PLAYGROUND]: 'pageNames.playground',
} as const;
