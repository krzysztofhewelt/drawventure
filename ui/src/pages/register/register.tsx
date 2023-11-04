import { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import paths from '@routes/paths';
import { auth } from '@lib/firebase';
import Logo from '@icons/Logo.svg';
import Input from '../../components/Input.tsx';
import Password from '../../components/Password.tsx';
import Button from '../../components/Button.tsx';
import Dog from '@icons/Dog.svg';

// TODO: style register page

export default function Register() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, _user, loading, errors] = useCreateUserWithEmailAndPassword(auth);

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
      // TODO
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
          <Input type="email" name="email" required placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Password name="password" placeholder="hasło" required onChange={(e) => setPassword(e.target.value)} />
          <Password
            name="repeatPassword"
            placeholder="powtórz hasło"
            required
            onChange={(e) => setRepeatPassword(e.target.value)}
          />

          {error && <div className="text-red-600">{error}</div>}

          <div>
            <Button type="submit" className="button_primary w-full p-2" text="Zaloguj" />
          </div>

          <p className="text-center">
            Jesteś już zarejestrowany?{' '}
            <NavLink className="link_primary" to={paths.LOGIN}>
              Zaloguj się
            </NavLink>
          </p>
        </form>

        <img src={Dog} className="mx-auto h-full" alt="logo" />
      </div>
    </main>
  );
}
