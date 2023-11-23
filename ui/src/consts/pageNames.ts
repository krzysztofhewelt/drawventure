import paths from '@routes/paths';

export const pageNames = {
  [paths.ROOT]: 'pageNames.main',
  [paths.TASKSTODO]: 'pageNames.tasksTodo',
  [paths.TASKDRAW]: 'pageNames.taskDraw',
  [paths.TASKFINISHED]: 'pageNames.taskFinished',
  [paths.TASKSDONE]: 'pageNames.taskFinishedList',
  [paths.PLAYGROUND]: 'pageNames.playground',
} as const;
