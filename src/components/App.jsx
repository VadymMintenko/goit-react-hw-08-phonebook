import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'Redax/auth/auth-operations';
import { RestrictedRoute } from './RestrictedRout';
import { Suspense } from 'react';
import { PrivateRoute } from './PrivatRoute';

import authSelector from 'Redax/auth/auth-selectors';

const Layout = lazy(() => import('../Layout'));
const Home = lazy(() => import('../pages/Home'));
const Registration = lazy(() => import('./RegistrationForm'));
const Autorization = lazy(() => import('./AutorazationForm'));
const ContactsList = lazy(() => import('./ContactsList'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.getIsRefreshing);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Feching'
  ) : (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                component={Registration}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/signIn"
            element={
              <RestrictedRoute
                component={Autorization}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsList} redirectTo="/" />}
          />
          ;
        </Route>
      </Routes>
    </Suspense>
  );
};
