import { useMutation } from '@tanstack/react-query';
import { confirmPasswordReset, UserCredential } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { auth, loginInWithEmailAndPassword } from '@lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginRegisterForm, ResetPasswordForm, ResetPasswordEmailForm } from 'types/Forms/Auth';
import { findUserAndSendResetPasswordMail } from 'api/auth/requests';

export const useLoginMutation = () => {
  return useMutation<UserCredential, FirebaseError, LoginRegisterForm>({
    mutationFn: (values: LoginRegisterForm) => loginInWithEmailAndPassword(values.email, values.password),
  });
};

export const useRegisterMutation = () => {
  return useMutation<UserCredential | undefined, FirebaseError, LoginRegisterForm>({
    mutationFn: (values: LoginRegisterForm) => createUserWithEmailAndPassword(auth, values.email, values.password),
  });
};

export const useSendResetPasswordEmailMutation = () => {
  return useMutation<void, FirebaseError, ResetPasswordEmailForm>({
    mutationFn: (values: ResetPasswordEmailForm) => findUserAndSendResetPasswordMail(values.email),
  });
};

export const useResetPasswordMutation = (oobCode: string) => {
  return useMutation<void, FirebaseError, ResetPasswordForm>({
    mutationFn: (values: ResetPasswordForm) => confirmPasswordReset(auth, oobCode, values.newPassword),
  });
};
