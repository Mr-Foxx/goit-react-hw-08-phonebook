import { useAuth } from '../../Redux/auth/useAuth';

import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component, redirectTo = '/contacts' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
