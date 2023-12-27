import AuthenticateLayout from 'layouts/AuthenticateLayout';
import Form from '@components/Form';
import { t } from 'i18next';
import Button from '@components/Button';
import { NavLink } from 'react-router-dom';
import paths from '@routes/paths';
import { auth } from '@lib/firebase';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { confirmPasswordReset } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { useMutation } from '@tanstack/react-query';
import LoadingScreen from '@components/LoadingScreen';
import { changeResetPasswordSchema } from 'consts/validationSchemas';
import Password from '@components/Password';

interface ResetPasswordToken {
  newPassword: string;
}

interface Props {
  oobCode: string;
}

const ResetPasswordEmail = ({ oobCode }: Props) => {
  const methods = useForm<ResetPasswordToken>({
    resolver: yupResolver(changeResetPasswordSchema),
  });

  const { mutate, isSuccess, isPending, isError, error } = useMutation<void, FirebaseError, ResetPasswordToken>({
    mutationFn: (values: ResetPasswordToken) => confirmPasswordReset(auth, oobCode, values.newPassword),
  });

  const handleSubmit: SubmitHandler<ResetPasswordToken> = (data) => {
    mutate(data);
  };

  if (isPending) return <LoadingScreen />;

  return (
    <AuthenticateLayout>
      <Form formMethods={methods} onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <div className="success">{isSuccess && t('firebase.auth/password-reset-successfully')}</div>
        <div className="error">{isError && t('firebase.' + error.code)}</div>
        <p className="text-left">{t('authenticateForms.resetPasswordInformation')}</p>
        <Password placeholder={t('authenticateForms.newPassword')} name="newPassword" />
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

export default ResetPasswordEmail;
