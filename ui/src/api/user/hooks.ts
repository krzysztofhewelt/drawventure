import { useMutation } from '@tanstack/react-query';
import { FirebaseError } from '@firebase/util';
import { updatePassword, User } from 'firebase/auth';
import { ChangePasswordForm } from 'types/Forms/Auth';

export const useChangePasswordMutation = (user: User | null | undefined) => {
  return useMutation<void, FirebaseError, ChangePasswordForm>({
    mutationFn: async (values: ChangePasswordForm) => {
      if (user) await updatePassword(user, values.newPassword);
    },
  });
};
