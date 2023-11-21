import { FC } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { publicRoutes, privateRoutes } from './routes';
import { ProtectedRoute } from '../components/helpers/ProtectedRoute';
import { RootState, setupStore } from '../store/store';
import { Provider, useSelector } from 'react-redux';
import { isNull } from '@bunt/is';
import { useAuth } from '../hooks/useAuth';
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
  const { isAuth } = useAuth();
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
