import AuthenticateLayout from 'layouts/AuthenticateLayout';
import Form from '@components/Form';
import { t } from 'i18next';
import Button from '@components/Button';
import { NavLink } from 'react-router-dom';
import paths from '@routes/paths';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingScreen from '@components/LoadingScreen';
import { changeResetPasswordSchema } from 'consts/validationSchemas';
import Password from '@components/Password';
import { useResetPasswordMutation } from 'api/auth/hooks';
import { ResetPasswordForm } from 'types/Forms/Auth';

interface Props {
  oobCode: string;
}

const ResetPasswordEmail = ({ oobCode }: Props) => {
  const methods = useForm<ResetPasswordForm>({
    resolver: yupResolver(changeResetPasswordSchema),
  });

  const { mutate, isSuccess, isPending, isError, error } = useResetPasswordMutation(oobCode);

  const handleSubmit: SubmitHandler<ResetPasswordForm> = (data) => {
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
