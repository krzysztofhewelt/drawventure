import { useState } from 'react';
import { auth, loginInWithEmailAndPassword } from '@lib/firebase';
import paths from '@routes/paths';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

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
        <section>
          <div>
            <p> FocusApp </p>

            <form>
              <div>
                <label htmlFor="email-address" className="bg-sky-700 px-4 py-2 text-white">
                  Email address
                </label>
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

              <div>
                <button onClick={handleLogin}>Login</button>
              </div>
            </form>

            <p className="text-center text-sm text-white">
              No account yet? <NavLink to={paths.REGISTER}>Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
