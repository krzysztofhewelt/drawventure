import { ReactNode } from 'react';
import Logo from '@icons/Logo.svg';
import Dog from '@icons/Dog.svg';

interface Props {
  children: ReactNode;
}

const AuthenticateLayout = ({ children }: Props) => {
  return (
    <div className="mx-auto grid h-full max-h-screen w-full grid-rows-3 items-center text-center lg:w-1/2">
      <img src={Logo} className="mx-auto my-auto w-3/4" alt="logo" />
      {children}
      <img src={Dog} className="z-0 mx-auto h-full" alt="logo" />
    </div>
  );
};

export default AuthenticateLayout;
