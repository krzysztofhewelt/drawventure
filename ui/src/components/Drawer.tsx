import Logo from '@icons/Logo.svg';
import { logout } from '@lib/firebase';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Hamburger from '@icons/Hamburger.svg?react';
import paths from '@routes/paths.ts';
import { useState } from 'react';
import { useOutsideClick } from '@lib/clickOutside.tsx';

const Drawer = () => {
  const [drawer, setDrawer] = useState(false);
  const drawerRef = useOutsideClick(() => {
    setDrawer(false);
  });

  const style = classNames('drawer', drawer && 'translate-x-0 shadow-extra', !drawer && 'translate-x-full');

  return (
    <div ref={drawerRef}>
      <Hamburger
        className="fixed right-0 z-50 w-20 cursor-pointer fill-primary p-4"
        onClick={() => setDrawer(!drawer)}
      />

      <div className={style}>
        <img src={Logo} alt="logo" className="mb-12 w-full" />
        <Link className="link_secondary" to={paths.LOGIN}>
          Zadania zrealizowane
        </Link>
        <Link className="link_secondary" to={paths.LOGIN}>
          Podejmij się nowego wyzwania
        </Link>
        <Link className="link_secondary" to={paths.LOGIN}>
          Plac zabaw
        </Link>
        <a href="" onClick={logout} className="link_secondary">
          Wyloguj
        </a>
        <Link className="link_secondary" to={paths.LOGIN}>
          Polityka prywatności
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
