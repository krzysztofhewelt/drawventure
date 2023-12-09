import { useState } from 'react';
import Input from './Input';
import HidePassword from '../assets/icons/HidePassword.svg';
import ShowPassword from '../assets/icons/ShowPassword.svg';
import classNames from 'classnames';

interface Props {
  placeholder: string;
  name: string;
}

const Password = ({ placeholder, name }: Props) => {
  const [type, setType] = useState('password');

  const toggleType = () => {
    if (type == 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        children={
          <div className="absolute right-0 top-0 my-auto mr-2 mt-2 w-7 cursor-pointer" onClick={toggleType}>
            <img src={HidePassword} className={classNames(type === 'password' && 'hidden')} alt="hide password" />
            <img src={ShowPassword} className={classNames(type === 'text' && 'hidden')} alt="show password" />
          </div>
        }
      />
    </>
  );
};

export default Password;
