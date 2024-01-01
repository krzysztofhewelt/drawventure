import { MouseEventHandler } from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, onClick, text, className }: Props) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  className: 'button_secondary',
  text: 'button',
};

export default Button;
