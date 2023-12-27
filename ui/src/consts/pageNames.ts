import paths from '@routes/paths';

export const pageNames = {
  [paths.ROOT]: 'pageNames.main',
  [paths.PLAYGROUND]: 'pageNames.playground',
  [paths.TASKS_TODO]: 'pageNames.tasksTodo',
  [paths.TASKS_DONE]: 'pageNames.taskFinishedList',
  [paths.TASK_DRAW]: 'pageNames.taskDraw',
  [paths.TASK_FINISHED]: 'pageNames.taskFinished',
  [paths.PRIVACY]: 'pageNames.privacy',
  [paths.CHANGE_PASSWORD]: 'pageNames.changePassword',
} as const;
