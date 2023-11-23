import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import AuthRoute from './authRoute';
import paths from './paths';
import Home from '../pages/home/home';
import Playground from '../pages/playground/playground';
import TaskDraw from 'pages/tasks/taskdraw';
import TasksTodo from 'pages/tasks/taskstodo';
import TasksDone from 'pages/tasks/tasksdone';
import Privacy from 'pages/privacy/privacy';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.ROOT}>
      <Route element={<AuthRoute />}>
        <Route element={<Home />} index />
        <Route element={<Playground />} path={paths.PLAYGROUND} />
        <Route element={<TasksTodo />} path={paths.TASKSTODO} />
        <Route element={<TasksDone />} path={paths.TASKSDONE} />
        <Route element={<TaskDraw />} path={paths.TASKDRAW} />
        <Route element={<Privacy />} path={paths.PRIVACY} />
      </Route>
      <Route element={<Login />} path={paths.LOGIN} />
      <Route element={<Register />} path={paths.REGISTER} />
    </Route>
  )
);
