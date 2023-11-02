import React from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ type, onClick, text, className, disabled }) => {
  return (
    <button onClick={onClick} type={type} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  text: 'button',
};

export default Button;
