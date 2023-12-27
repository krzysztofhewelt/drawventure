import { auth, loginInWithEmailAndPassword } from '@lib/firebase';
import paths from '@routes/paths';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Input from '@components/Input';
import Password from '@components/Password';
import Button from '@components/Button';
import { t } from 'i18next';
import Form from '@components/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginRegisterSchema } from 'consts/validationSchemas';
import { useMutation } from '@tanstack/react-query';
import LoadingScreen from '@components/LoadingScreen';
import { FirebaseError } from '@firebase/util';
import { UserCredential } from '@firebase/auth';
import AuthenticateLayout from 'layouts/AuthenticateLayout';

interface LoginCredentials {
  email: string;
  password: string;
}

export default function Login() {
  const [user] = useAuthState(auth);

  const methods = useForm<LoginCredentials>({
    resolver: yupResolver(loginRegisterSchema),
  });

  const { mutate, isSuccess, isPending, isError, error } = useMutation<UserCredential, FirebaseError, LoginCredentials>(
    {
      mutationFn: (values: LoginCredentials) => loginInWithEmailAndPassword(values.email, values.password),
    }
  );

  const handleLogin: SubmitHandler<LoginCredentials> = (data) => {
    mutate(data);
  };

  if (isPending) return <LoadingScreen />;
  if (user || isSuccess) return <Navigate to={paths.ROOT} replace />;

  return (
    <AuthenticateLayout>
      <Form formMethods={methods} className="flex w-full flex-col gap-3" onSubmit={handleLogin}>
        <div className="error">{isError && t('firebase.' + error.code)}</div>

        <Input name="email" placeholder={t('authenticateForms.email')} />
        <Password name="password" placeholder={t('authenticateForms.password')} />

        <div className="text-right">
          <NavLink className="link_secondary" to={paths.PASSWORD_RESET}>
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
    </AuthenticateLayout>
  );
}
