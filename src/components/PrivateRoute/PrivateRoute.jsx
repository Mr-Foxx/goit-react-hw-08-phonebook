import { useAuth } from '../../Redux/auth/useAuth';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, redirectTo = '/contacts' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
