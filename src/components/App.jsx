import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../Redax/contacts/operations';

const Layout = lazy(() => import('../Layout'));
const RegistrationForm = lazy(() => import('./RegistrationForm'));
const AutorizationForm = lazy(() => import('./AutorazationForm'));
const UserMenu = lazy(() => import('./UserMenu'));
const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="signIn" element={<AutorizationForm />} />
        <Route path="user" element={<UserMenu />} />
      </Route>
    </Routes>
  );
};
