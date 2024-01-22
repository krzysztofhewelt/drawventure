import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import AuthRoute from './authRoute';
import paths from './paths';
import Home from 'pages/home/Home';
import Playground from 'pages/playground/Playground';
import TaskDraw from 'pages/tasks/TaskDraw';
import TaskTodo from 'pages/tasks/TaskTodo';
import TaskDone from 'pages/tasks/TaskDone';
import TaskFinished from 'pages/tasks/TaskFinished';
import ChangePassword from 'pages/user/ChangePassword';
import NotFound from 'pages/NotFound';
import ResetPassword from 'pages/passwordReset/ResetPassword';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.ROOT}>
      <Route element={<AuthRoute />}>
        <Route element={<Home />} index />
        <Route element={<Playground />} path={paths.PLAYGROUND} />
        <Route element={<TaskTodo />} path={paths.TASKS_TODO} />
        <Route element={<TaskDone />} path={paths.TASKS_DONE} />
        <Route element={<TaskDraw />} path={paths.TASK_DRAW} />
        <Route element={<TaskFinished />} path={paths.TASK_FINISHED} />
        <Route element={<ChangePassword />} path={paths.CHANGE_PASSWORD} />
      </Route>
      <Route element={<Login />} path={paths.LOGIN} />
      <Route element={<Register />} path={paths.REGISTER} />
      <Route element={<ResetPassword />} path={paths.PASSWORD_RESET} />
      <Route element={<NotFound />} path="*" />
    </Route>
  ),
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);
