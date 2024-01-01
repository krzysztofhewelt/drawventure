import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendResetPasswordEmailSchema } from 'consts/validationSchemas';
import LoadingScreen from '@components/LoadingScreen';
import { NavLink } from 'react-router-dom';
import paths from '@routes/paths';
import AuthenticateLayout from 'layouts/AuthenticateLayout';
import Form from '@components/Form';
import { t } from 'i18next';
import Input from '@components/Input';
import Button from '@components/Button';
import { useSendResetPasswordEmailMutation } from 'api/auth/hooks';
import { ResetPasswordEmailForm } from 'types/Forms/Auth';

const SendEmail = () => {
  const methods = useForm<ResetPasswordEmailForm>({
    resolver: yupResolver(sendResetPasswordEmailSchema),
  });

  const { mutate, isSuccess, isPending, isError, error } = useSendResetPasswordEmailMutation();

  const handleSubmit: SubmitHandler<ResetPasswordEmailForm> = (data) => {
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
