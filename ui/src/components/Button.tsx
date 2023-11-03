import { MouseEventHandler } from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, onClick, text, className, disabled }: Props) => {
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
