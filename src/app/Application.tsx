import { FC, useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { publicRoutes, privateRoutes } from './routes';
import { ProtectedRoute } from '../components/helpers/ProtectedRoute';
import { setupStore, useAppDispatch } from '../store/store';
import { Provider } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { fetchCourses, fetchUserCourses } from '../services/courseService';
const Application: FC = () => {
  const store = setupStore();

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <RouteSelect />
        </BrowserRouter>
      </Provider>
    </>
  );
};

const RouteSelect: FC = () => {
  const { isAuth, id } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    id && dispatch(fetchUserCourses(id));
  }, [dispatch, id]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route element={<ProtectedRoute auth={isAuth} />}>
          {privateRoutes.map(
            ({ path, component }) => isAuth && <Route key={path} path={path} element={component} />,
          )}
        </Route>
      </Route>
    </Routes>
  );
};

export default Application;
