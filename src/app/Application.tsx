import { FC } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { publicRoutes, privateRoutes } from './routes';
import { ProtectedRoute } from '../components/helpers/ProtectedRoute';
const Application: FC = () => {
  //для доступа к profile и workout ставим true
	const auth = false;
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						{publicRoutes.map(({ path, component }) => (
							<Route key={path} path={path} element={component} />
						))}
						<Route element={<ProtectedRoute auth={auth} />}>
							{privateRoutes.map(({ path, component }) => (
								<Route key={path} path={path} element={component} />
							))}
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Application;
