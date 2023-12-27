import { NavLink, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import paths from '@routes/paths';
import { auth } from '@lib/firebase';
import Input from '@components/Input';
import Button from '@components/Button';
import { t } from 'i18next';
import Form from '@components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Password from '@components/Password';
import { loginRegisterSchema } from 'consts/validationSchemas';
import { useMutation } from '@tanstack/react-query';
import LoadingScreen from '@components/LoadingScreen';
import { UserCredential } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthenticateLayout from 'layouts/AuthenticateLayout';

type RegisterData = {
  email: string;
  password: string;
};

export default function Register() {
  const [user] = useAuthState(auth);

  const methods = useForm({
    resolver: yupResolver(loginRegisterSchema),
  });

  const { mutate, isSuccess, isPending, isError, error } = useMutation<
    UserCredential | undefined,
    FirebaseError,
    RegisterData
  >({
    mutationFn: (values: RegisterData) => createUserWithEmailAndPassword(auth, values.email, values.password),
  });

  const handleLogin: SubmitHandler<RegisterData> = (data) => {
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

        <Button type="submit" className="button_primary" text={t('button.register')} />

        <p className="text-center">
          {t('authenticateForms.alreadyRegister')}{' '}
          <NavLink className="link_primary" to={paths.LOGIN}>
            {t('authenticateForms.login')}
          </NavLink>
        </p>
      </Form>
    </AuthenticateLayout>
  );
}
