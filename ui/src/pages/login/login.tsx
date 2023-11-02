import { useState } from 'react';
import { auth, loginInWithEmailAndPassword } from '@lib/firebase';
import paths from '@routes/paths';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import IconLogo from '../../assets/icons/Logo.tsx';
import IconDog from '../../assets/icons/Dog.tsx';
import Input from '../../components/Input.tsx';
import DifficultyLevel from '../../components/DifficultyLevel.tsx';
import Card from '../../components/Card.tsx';
import PickerDifficultyLevel from '../../components/PickerDifficultyLevel.tsx';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loginInWithEmailAndPassword(email, password).then((_userCredential) => {
      navigate(paths.ROOT);
    });
  };

  if (user) {
    return <Navigate to={paths.ROOT} replace />;
  }

  return (
    <>
      <main>
        <PickerDifficultyLevel active={2} />

        <Card
          className="rounded-normal bg-secondary w-1/2 bg-[50%] drop-shadow-2xl"
          header={
            <div className="flex justify-between">
              <span>Okrąg</span>
              <DifficultyLevel difficulty={1} />
            </div>
          }
          description="Podejmij kolejne wyzwanie w rysowaniu"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
          imagePosition="left"
        />

        <section className="max-h-screen min-h-screen">
          <DifficultyLevel difficulty={1} />

          <div className="grid h-screen max-h-screen grid-rows-3 text-center">
            <IconLogo className="mx-auto my-auto w-1/4" />

            <form className="my-auto">
              <Input type="text" placeholder="email" />
              <Input type="password" placeholder="password" />

              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-right text-sm">
                <NavLink className="secondary-link" to={paths.LOGIN}>
                  Nie pamiętasz hasła?
                </NavLink>
              </div>

              <div>
                <button className="primary-button w-full p-2" onClick={handleLogin}>
                  Login
                </button>
              </div>

              <p className="text-center text-sm">
                Nie posiadasz konta?{' '}
                <NavLink className="primary-link" to={paths.REGISTER}>
                  Zarejestruj się
                </NavLink>
              </p>
            </form>

            <IconDog className="mx-auto h-full" />
          </div>
        </section>
      </main>
    </>
  );
}
