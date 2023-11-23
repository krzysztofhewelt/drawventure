import { auth, loginInWithEmailAndPassword } from '@lib/firebase';
import paths from '@routes/paths';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logo from '@icons/Logo.svg';
import Dog from '@icons/Dog.svg';
import Input from '@components/Input';
import Password from '@components/Password';
import Button from '@components/Button';
import { t } from 'i18next';
import Form from '@components/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginRegisterSchema } from 'consts/validationSchemas';

type LoginCredentials = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const methods = useForm<LoginCredentials>({
    resolver: yupResolver(loginRegisterSchema),
  });

  const handleLogin: SubmitHandler<LoginCredentials> = (data) => {
    loginInWithEmailAndPassword(data.email, data.password).then((_userCredential) => {
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

        <Form formMethods={methods} className="flex w-full flex-col gap-3" onSubmit={handleLogin}>
          <Input name="email" placeholder={t('authenticateForms.email')} />
          <Password name="password" placeholder="hasło" />

          <div className="text-right">
            <NavLink className="link_secondary" to={paths.LOGIN}>
              {t('authenticateForms.forgotPassword')}
            </NavLink>
          </div>

          <Button type="submit" className="button_primary" text={t('button.login')} />

          <p className="text-center">
            {t('authenticateForms.dontHaveAccount')}{' '}
            <NavLink className="link_primary" to={paths.REGISTER}>
              {t('authenticateForms.register')}
            </NavLink>
          </p>
        </Form>

        <img src={Dog} className="z-0 mx-auto h-full" alt="logo" />
      </div>
    </main>
  );
}
