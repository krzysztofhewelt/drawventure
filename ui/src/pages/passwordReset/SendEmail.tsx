import { auth } from '@lib/firebase';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendResetPasswordEmailSchema } from 'consts/validationSchemas';
import { fetchSignInMethodsForEmail } from '@firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FirebaseError } from '@firebase/util';
import { useMutation } from '@tanstack/react-query';
import LoadingScreen from '@components/LoadingScreen';
import { NavLink } from 'react-router-dom';
import paths from '@routes/paths';
import AuthenticateLayout from 'layouts/AuthenticateLayout';
import Form from '@components/Form';
import { t } from 'i18next';
import Input from '@components/Input';
import Button from '@components/Button';

interface ResetPasswordEmail {
  email: string;
}

const SendEmail = () => {
  const methods = useForm<ResetPasswordEmail>({
    resolver: yupResolver(sendResetPasswordEmailSchema),
  });

  const findUserAndSendResetPasswordMail = async (email: string) => {
    const user = await fetchSignInMethodsForEmail(auth, email);
    if (user.length > 0) return sendPasswordResetEmail(auth, email);
    else return Promise.reject(new FirebaseError('auth/user-not-found', 'Firebase: Error (auth/user-not-found).'));
  };

  const { mutate, isSuccess, isPending, isError, error } = useMutation<void, FirebaseError, ResetPasswordEmail>({
    mutationFn: (values: ResetPasswordEmail) => findUserAndSendResetPasswordMail(values.email),
  });

  const handleSubmit: SubmitHandler<ResetPasswordEmail> = (data) => {
    mutate(data);
  };

  if (isPending) return <LoadingScreen />;

  return (
    <AuthenticateLayout>
      <Form formMethods={methods} onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <div className="success">{isSuccess && t('firebase.auth/reset-email-successfully')}</div>
        <div className="error">{isError && t('firebase.' + error.code)}</div>
        <p className="text-left">{t('authenticateForms.resetPasswordInformation')}</p>
        <Input placeholder={t('authenticateForms.email')} name="email" />
        <Button type="submit" text={t('button.resetPassword')} className="button_primary" />
        <p className="text-center">
          {t('authenticateForms.dontWantResetPassword')}{' '}
          <NavLink className="link_primary" to={paths.LOGIN}>
            {t('authenticateForms.login')}
          </NavLink>
        </p>
      </Form>
    </AuthenticateLayout>
  );
};

export default SendEmail;
