import Loading from '@icons/Loading.svg?react';
import { t } from 'i18next';

const LoadingScreen = () => {
  return (
    <div className="absolute left-0 top-0 z-50 h-screen w-screen bg-white text-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-background">
        <Loading className="w-48 animate-spin-loading fill-primary" />
        <div className="text-3xl font-bold">{t('miscellaneous.loading')}</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
