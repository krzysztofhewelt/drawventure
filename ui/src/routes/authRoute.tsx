import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '@lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import paths from './paths';
import Drawer from '@components/Drawer';
import Header from '@components/Header';
import LoadingScreen from '@components/LoadingScreen';

export default function AuthRoute() {
  const [user, loading, error] = useAuthState(auth);

  if (error) return <div className="error">Error</div>;
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to={paths.LOGIN} />;

  return (
    <main className="h-screen p-6">
      <Header />
      <Drawer />
      <Outlet />
    </main>
  );
}
