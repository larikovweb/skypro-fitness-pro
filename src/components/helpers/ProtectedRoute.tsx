import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';

interface IProtectedRoute {
	auth: boolean;
}

export const ProtectedRoute: FC<IProtectedRoute> = (props: IProtectedRoute) => {
	const { auth } = props;
	if (!auth) {
		return <Navigate to="/login" replace={true} />;
	}
	return <Outlet />;
};
