import Logo from '@icons/Logo.svg';
import { logout } from '@lib/firebase';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Hamburger from '@icons/Hamburger.svg?react';
import paths from '@routes/paths';
import { useState } from 'react';
import { useOutsideClick } from '@lib/clickOutside';
import { t } from 'i18next';

interface DrawerLinkProps {
  path: string;
  textKey: string;
  onClick: () => void;
}

const DrawerLink = ({ path, textKey, onClick }: DrawerLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => classNames('link_secondary', isActive && 'font-bold')}
      to={path}
      onClick={onClick}
    >
      {t(textKey)}
    </NavLink>
  );
};

const Drawer = () => {
  const [isOpen, setOpen] = useState(false);
  const drawerRef = useOutsideClick(() => {
    closeDrawer();
  });

  const closeDrawer = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const style = classNames('drawer', isOpen && 'translate-x-0 shadow-extra', !isOpen && 'translate-x-full');

  return (
    <>
      {isOpen && <div className="fixed top-0 z-10 h-full w-full bg-background opacity-75"></div>}

      <div ref={drawerRef}>
        <Hamburger className="fixed right-0 top-0 z-50 w-20 cursor-pointer fill-primary p-4" onClick={toggleDrawer} />

        <div className={style}>
          <img src={Logo} alt="logo" className="mb-12 w-full" />
          <DrawerLink path={paths.TASKSDONE} textKey="drawer.tasksFinished" onClick={closeDrawer} />
          <DrawerLink path={paths.TASKSTODO} textKey="drawer.checkTasks" onClick={closeDrawer} />
          <DrawerLink path={paths.PLAYGROUND} textKey="drawer.sandbox" onClick={closeDrawer} />
          <a href="" onClick={logout}>
            {t('drawer.logout')}
          </a>
          <DrawerLink path={paths.PRIVACY} textKey="drawer.privacyPolicy" onClick={closeDrawer} />
        </div>
      </div>
    </>
  );
};

export default Drawer;
