import { ChangeEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  required?: boolean;
  autoComplete?: string;
  children?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Input = ({ type, name, placeholder, value, required, autoComplete, children, onChange, error }: Props) => {
  const style = classNames('input', children && 'pr-11', error && 'border border-red-500');

  return (
    <div className="relative w-full">
      <input
        className={style}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {children}
      <div className="text-red-500">{error}</div>
    </div>
  );
};

Input.defaultProps = {
  required: true,
  autoComplete: 'on',
};

export default Input;
