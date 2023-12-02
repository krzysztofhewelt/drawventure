import { t } from 'i18next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@lib/firebase';
import { matchPath, useLocation } from 'react-router-dom';
import { pageNames } from 'consts/pageNames';
import paths from '@routes/paths';

const mapPathnameToPageName = (pathname: string): string => {
  const key = Object.values(paths).find((key) => !!matchPath(key, pathname));

  if (key) {
    return pageNames[key];
  }

  return pageNames[paths.ROOT];
};

const Header = () => {
  const [user] = useAuthState(auth);
  const username = user?.email?.split('@')[0];
  const location = useLocation();

  return (
    <div className="mb-4 flex flex-col leading-none">
      {t('pageNames.welcome')}
      <span className="block text-xl font-bold">{username}</span>
      {t(mapPathnameToPageName(location.pathname))}
    </div>
  );
};

export default Header;
