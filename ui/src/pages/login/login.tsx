import { useState } from 'react';
import { auth, loginInWithEmailAndPassword } from '@lib/firebase';
import paths from '@routes/paths';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logo from '@icons/Logo.svg';
import Dog from '@icons/Dog.svg';
import Input from '../../components/Input.tsx';
import Button from '../../components/Button.tsx';
import Password from '../../components/Password.tsx';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginInWithEmailAndPassword(email, password).then((_userCredential) => {
      navigate(paths.ROOT);
    });
  };

  if (user) {
    return <Navigate to={paths.ROOT} replace />;
  }

  return (
    <main>
      <div className="mx-auto grid h-full max-h-screen w-full grid-rows-3 items-center text-center lg:w-1/2">
        <img src={Logo} className="mx-auto my-auto w-3/4" alt="logo" />

        <form className="flex w-full flex-col gap-3" onSubmit={handleLogin}>
          <Input type="email" name="email" required placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Password name="password" placeholder="hasło" required onChange={(e) => setPassword(e.target.value)} />

          <div className="text-right">
            <NavLink className="link_secondary" to={paths.LOGIN}>
              Nie pamiętasz hasła?
            </NavLink>
          </div>

          <div>
            <Button type="submit" className="button_primary w-full p-2" text="Zaloguj" />
          </div>

          <p className="text-center">
            Nie posiadasz konta?{' '}
            <NavLink className="link_primary" to={paths.REGISTER}>
              Zarejestruj się
            </NavLink>
          </p>
        </form>

        <img src={Dog} className="mx-auto h-full" alt="logo" />
      </div>
    </main>
  );
}
