import { ChangeEventHandler, useState } from 'react';
import Input from './Input.tsx';
import HidePassword from '../assets/icons/HidePassword.svg';
import ShowPassword from '../assets/icons/ShowPassword.svg';

interface Props {
  placeholder: string;
  name: string;
  value?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Password = ({ placeholder, name, required, onChange, error }: Props) => {
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
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
        autoComplete="off"
        error={error}
        children={
          <div className="absolute right-0 top-0 my-auto mr-2 mt-2 w-7 cursor-pointer" onClick={toggleType}>
            {type == 'text' && <img src={HidePassword} alt="hide password" />}
            {type == 'password' && <img src={ShowPassword} alt="show password" />}
          </div>
        }
      />
    </>
  );
};

export default Password;
