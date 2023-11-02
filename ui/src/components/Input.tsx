import React, { ReactNode } from 'react';

interface Props {
  type: string;
  placeholder: string;
  value?: string;
  required?: boolean;
  children?: ReactNode;
}

const Input: React.FC<Props> = ({ type, placeholder, value, required, children }) => {
  return (
    <div className="relative w-fit">
      <input
        className="rounded-normal border-2 border-red-600 bg-white p-2"
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
      />
      {children}
    </div>
  );
};

Input.defaultProps = {
  required: true,
};

export default Input;
