import Main from '../pages/main/Main';
import Profile from '../pages/profile/Profile';
import Workout from '../pages/Workout';
import NotFound from '../pages/NotFound';

import { MAIN_ROUTE, NOT_FOUND_ROUTE, PROFILE_ROUTE, WORKOUT_ROUTE } from '../utils/consts';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Main /> },
  { path: ABOUT_ROUTE, component: <CoursePage /> },

  //...
  { path: NOT_FOUND_ROUTE, component: <NotFound /> },
];

export const privateRoutes: RouteType[] = [
  { path: PROFILE_ROUTE, component: <Profile /> },
  { path: WORKOUT_ROUTE, component: <Workout /> },
];
