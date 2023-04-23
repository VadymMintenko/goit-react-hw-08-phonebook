import authSelector from 'Redax/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const isRefreshing = useSelector(authSelector.getIsRefreshing);
  const shuldRedirected = !isRefreshing && !isLoggedIn;
  return shuldRedirected ? <Navigate to={redirectTo} /> : <Component />;
};
