import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '@lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import paths from './paths';
import Drawer from '@components/Drawer';
import Header from '@components/Header';

export default function AuthRoute() {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    return <>Błąd...</>;
  }

  if (loading) {
    return <>Ładowanie...</>;
  }

  if (!user) {
    return <Navigate to={paths.LOGIN} />;
  }

  return (
    <main className="min-h-screen p-10">
      <Header />
      <Drawer />
      <Outlet />
    </main>
  );
}
