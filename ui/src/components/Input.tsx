import { ReactNode } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { t } from 'i18next';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  children?: ReactNode;
}

const Input = ({ name, type, placeholder, autoComplete, children }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const style = classNames('input', children && '!pr-11', errors[name] && 'border border-red-500');

  return (
    <div className="relative w-full">
      <input className={style} type={type} placeholder={placeholder} autoComplete={autoComplete} {...register(name)} />
      {children}
      <div className="text-left text-red-500">
        {errors?.[name] && <div>{t(errors[name]?.message?.toString() || 'validation.error')}</div>}
      </div>
    </div>
  );
};

Input.defaultProps = {
  autoComplete: 'on',
  type: 'text',
};

export default Input;
