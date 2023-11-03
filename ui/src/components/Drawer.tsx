import Logo from '@icons/Logo.svg';

const Drawer = ({ isOpen }: { isOpen: boolean }) => {
  const style =
    'right-0 fixed transition duration-150 ease-in-out z-40 flex min-h-screen w-1/2 flex-col gap-4 rounded-normal bg-primaryHigh p-16 text-xl';

  return (
    <div className={isOpen ? 'shadow-extra translate-x-0 ' + style : 'translate-x-full ' + style}>
      <img src={Logo} alt="logo" className="mb-12 w-full" />
      <a href="" className="link_secondary">
        Zadania zrealizowane
      </a>
      <a href="" className="link_secondary">
        Podejmij się nowego wyzwania
      </a>
      <a href="" className="link_secondary">
        Plac zabaw
      </a>
      <a href="" className="link_secondary">
        Wyloguj
      </a>
      <a href="" className="link_secondary">
        Polityka prywatności
      </a>
    </div>
  );
};

export default Drawer;
