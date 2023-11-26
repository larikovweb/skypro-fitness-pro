import Main from '../pages/main/Main';
import NotFound from '../pages/NotFound';

import {
  COURSE_ROUTE,
  MAIN_ROUTE,
  NOT_FOUND_ROUTE,
  PROFILE_ROUTE,
  WORKOUT_ROUTE,
} from '../utils/consts';
import Course from '../pages/course/Course';
import TestLogin from '../pages/auth/TestLogin';
import TestRegister from '../pages/auth/TestRegister';
import Profile from '../pages/profile/Profile';
import { TestWorkout } from '../pages/auth/TestWorkout';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Main /> },
  { path: `${COURSE_ROUTE}/:id`, component: <Course /> },
  { path: '/test-login', component: <TestLogin /> },
  { path: '/test-register', component: <TestRegister /> },

  //...
  { path: NOT_FOUND_ROUTE, component: <NotFound /> },
];

export const privateRoutes: RouteType[] = [
  { path: PROFILE_ROUTE, component: <Profile /> },
  { path: `${WORKOUT_ROUTE}/:courseId/:workoutId`, component: <TestWorkout /> },
];
