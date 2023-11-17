import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import AuthRoute from './authRoute';
import paths from './paths';
import Tests from '../pages/tests/tests';
import Home from '../pages/home/home';
import Playground from '../pages/playground/playground';
import TaskList from 'pages/tasks/tasklist';
import TaskDraw from 'pages/tasks/taskdraw';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.ROOT}>
      <Route element={<AuthRoute />}>
        <Route element={<Home />} index />
        <Route element={<Playground />} path={paths.PLAYGROUND} />
        <Route element={<TaskList />} path={paths.TASKSTODO} />
        <Route element={<TaskDraw />} path={paths.TASKDRAW} />
      </Route>
      <Route element={<Login />} path={paths.LOGIN} />
      <Route element={<Register />} path={paths.REGISTER} />
      <Route element={<Tests />} path={paths.TESTS} />
    </Route>
  )
);
