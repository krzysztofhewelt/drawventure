import { t } from 'i18next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@lib/firebase';
import { useLocation } from 'react-router-dom';
import { pageNames } from 'consts/pageNames';

const Header = () => {
  const [user] = useAuthState(auth);
  const username = user?.email?.split('@')[0];
  const location = useLocation();

  return (
    <div className="mb-4 flex flex-col leading-none">
      {t('pageNames.welcome')}
      <span className="block text-xl font-bold">{username}</span>
      {t(pageNames[location.pathname])}
    </div>
  );
};

export default Header;
