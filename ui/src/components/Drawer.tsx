import Logo from '@icons/Logo.svg';
import { logout } from '@lib/firebase';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Hamburger from '@icons/Hamburger.svg?react';
import paths from '@routes/paths.ts';
import { useState } from 'react';
import { useOutsideClick } from '@lib/clickOutside.tsx';
import { t } from 'i18next';

const Drawer = () => {
  const [isOpen, setOpen] = useState(false);
  const drawerRef = useOutsideClick(() => {
    setOpen(false);
  });

  const style = classNames('drawer', isOpen && 'translate-x-0 shadow-extra', !isOpen && 'translate-x-full');

  return (
    <div ref={drawerRef}>
      <Hamburger className="fixed right-0 z-50 w-20 cursor-pointer fill-primary p-4" onClick={() => setOpen(!isOpen)} />

      <div className={style}>
        <img src={Logo} alt="logo" className="mb-12 w-full" />
        <Link className="link_secondary" to={paths.LOGIN}>
          {t('drawer.tasksFinished')}
        </Link>
        <Link className="link_secondary" to={paths.LOGIN}>
          {t('drawer.checkTasks')}
        </Link>
        <Link className="link_secondary" to={paths.LOGIN}>
          {t('drawer.sandbox')}
        </Link>
        <a href="" onClick={logout} className="link_secondary">
          {t('drawer.logout')}
        </a>
        <Link className="link_secondary" to={paths.LOGIN}>
          {t('drawer.privacyPolicy')}
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
