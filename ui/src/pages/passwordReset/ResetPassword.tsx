import { Navigate, useSearchParams } from 'react-router-dom';
import SendEmail from 'pages/passwordReset/SendEmail';
import ResetPasswordEmail from 'pages/passwordReset/ResetPasswordEmail';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@lib/firebase';
import paths from '@routes/paths';

export default function ResetPassword() {
  const [queryParameters] = useSearchParams();
  const mode = queryParameters.get('mode');
  const oobCode = queryParameters.get('oobCode');
  const [user] = useAuthState(auth);

  if (user) return <Navigate to={paths.ROOT} />;

  if (!oobCode || !mode) return <SendEmail />;
  else return <ResetPasswordEmail oobCode={oobCode} />;
}
