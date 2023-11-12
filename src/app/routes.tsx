import About from "../pages/About";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import { ProfilePage } from "../pages/Profile/Profile";

import {
  ABOUT_ROUTE,
  MAIN_ROUTE,
  NOT_FOUND_ROUTE,
  PROFILE_ROUTE,
} from "../utils/consts";

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Main /> },
  { path: ABOUT_ROUTE, component: <About /> },
  { path: PROFILE_ROUTE, component: <ProfilePage /> },

  //...
  { path: NOT_FOUND_ROUTE, component: <NotFound /> },
];
