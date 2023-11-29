import Main from '../pages/main/Main';
import NotFound from '../pages/NotFound';

import {
  COURSE_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  NOT_FOUND_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
  WORKOUT_ROUTE,
} from '../utils/consts';
import Course from '../pages/course/Course';
import Profile from '../pages/profile/Profile';
import { Workout } from '../pages/workout/Workout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Main /> },
  { path: `${COURSE_ROUTE}/:id`, component: <Course /> },
  { path: LOGIN_ROUTE, component: <Login /> },
  { path: REGISTER_ROUTE, component: <Register /> },

  //...
  { path: NOT_FOUND_ROUTE, component: <NotFound /> },
];

export const privateRoutes: RouteType[] = [
  { path: PROFILE_ROUTE, component: <Profile /> },
  { path: `${WORKOUT_ROUTE}/:courseId/:workoutId`, component: <Workout /> },
];
