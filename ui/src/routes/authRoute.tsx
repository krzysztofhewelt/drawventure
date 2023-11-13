import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '@lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import paths from './paths';
import Drawer from '@components/Drawer';

export default function AuthRoute() {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    return <>Error</>;
  }

  if (loading) {
    return <>Loading</>;
  }

  if (!user) {
    return <Navigate to={paths.LOGIN} />;
  }

  return (
    <main>
      <Drawer />
      <Outlet />
    </main>
  )
}
