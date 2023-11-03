import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Home from '../pages/home/home';
import AuthRoute from './authRoute';
import paths from './paths';
import Tests from '../pages/tests/tests.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.ROOT}>
      <Route element={<AuthRoute />}>
        <Route element={<Home />} index />
      </Route>
      <Route element={<Login />} path={paths.LOGIN} />
      <Route element={<Register />} path={paths.REGISTER} />
      <Route element={<Tests />} path={paths.TESTS} />
    </Route>
  )
);
