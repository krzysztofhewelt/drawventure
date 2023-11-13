import { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import paths from '@routes/paths';
import { auth } from '@lib/firebase';
import Logo from '@icons/Logo.svg';
import Dog from '@icons/Dog.svg';
import Input from '@components/Input.tsx';
import Password from '@components/Password.tsx';
import Button from '@components/Button.tsx';
import { t } from 'i18next';

export default function Register() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, _user] = useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (repeatPassword != password) {
      setError('Hasła muszą być takie same!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(email, password);
      navigate(paths.LOGIN);
    } catch (e) {
      // TODO }
    }
  };

  if (user) {
    return <Navigate to={paths.ROOT} replace />;
  }

  return (
    <main>
      <div className="mx-auto grid h-full max-h-screen w-full grid-rows-3 items-center text-center lg:w-1/2">
        <img src={Logo} className="mx-auto my-auto w-3/4" alt="logo" />

        <form className="flex w-full flex-col gap-3" onSubmit={handleRegister}>
          <Input
            type="email"
            name="email"
            required
            placeholder={t('authenticateForms.email')}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Password
            name="password"
            required
            placeholder={t('authenticateForms.password')}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Password
            name="repeatPassword"
            placeholder={t('authenticateForms.repeatPassword')}
            required
            onChange={(e) => setRepeatPassword(e.target.value)}
          />

          {error && <div className="text-red-600">{error}</div>}

          <div>
            <Button type="submit" className="button_primary w-full p-2" text={t('button.submit')} />
          </div>

          <p className="text-center">
            {t('authenticateForms.alreadyRegister')}{' '}
            <NavLink className="link_primary" to={paths.LOGIN}>
              {t('authenticateForms.login')}
            </NavLink>
          </p>
        </form>

        <img src={Dog} className="mx-auto h-full" alt="logo" />
      </div>
    </main>
  );
}
