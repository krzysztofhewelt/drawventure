import { fetchSignInMethodsForEmail } from '@firebase/auth';
import { auth } from '@lib/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FirebaseError } from '@firebase/util';

export const findUserAndSendResetPasswordMail = async (email: string) => {
  const user = await fetchSignInMethodsForEmail(auth, email);
  if (user.length > 0) return sendPasswordResetEmail(auth, email);

  return Promise.reject(new FirebaseError('auth/user-not-found', 'Firebase: Error (auth/user-not-found).'));
};
