import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from './app';

const auth = getAuth(app);

export const logout = () => {
  signOut(auth);
};

export const loginInWithEmailAndPassword = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export default auth;
