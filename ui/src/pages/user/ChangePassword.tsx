import Form from '@components/Form';
import Password from '@components/Password';
import Button from '@components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { changeResetPasswordSchema } from 'consts/validationSchemas';
import LoadingScreen from '@components/LoadingScreen';
import { auth } from '@lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { t } from 'i18next';
import { useChangePasswordMutation } from 'api/user/hooks';
import { ChangePasswordForm } from 'types/Forms/Auth';

export default function ChangePassword() {
  const [user] = useAuthState(auth);

  const methods = useForm<ChangePasswordForm>({
    resolver: yupResolver(changeResetPasswordSchema),
  });

  const { mutate, isPending, isSuccess, isError, error } = useChangePasswordMutation(user);

  const handleSubmit: SubmitHandler<ChangePasswordForm> = (data) => {
    mutate(data);
  };

  if (isPending) return <LoadingScreen />;

  return (
    <div className="h-full">
      <div className="error">{isError && t('firebase.auth/unknown-error', { errorCode: error?.code })}</div>
      <div className="success">{isSuccess && t('firebase.auth/password-changed')}</div>
      <Form
        formMethods={methods}
        onSubmit={handleSubmit}
        className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 lg:w-1/2"
      >
        <Password placeholder={t('authenticateForms.newPassword')} name="newPassword" />
        <Button type="submit" text={t('button.changePassword')} className="button_primary" />
      </Form>
    </div>
  );
}
