import NotFoundIcon from '@icons/NotFound.svg?react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import paths from '@routes/paths';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-background text-center font-bold">
      <div className="text-3xl">{t('miscellaneous.error.notFound')}</div>
      <Link to={paths.ROOT} className="link_primary">
        {t('miscellaneous.goMainPage')}
      </Link>
      <NotFoundIcon className="w-1/2 lg:w-1/4" />
    </div>
  );
}
