import { ChangeEventHandler, ReactNode } from 'react';

interface Props {
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  required?: boolean;
  autoComplete?: string;
  children?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, name, placeholder, value, required, autoComplete, children, onChange }: Props) => {
  const style =
    'w-full rounded-normal border-2 bg-white p-2 placeholder:text-gray-500 focus:border-primary focus:outline-none';

  return (
    <div className="relative w-full">
      <input
        className={children ? style + ' pr-11' : style}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {children}
    </div>
  );
};

Input.defaultProps = {
  required: true,
  autoComplete: 'on',
};

export default Input;
