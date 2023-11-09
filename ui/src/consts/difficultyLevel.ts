import i18next from '../i18n';

export const difficultyLevel = {
  1: i18next.t('tasks.difficultyLevels.easy'),
  2: i18next.t('tasks.difficultyLevels.medium'),
  3: i18next.t('tasks.difficultyLevels.hard'),
} as const;
