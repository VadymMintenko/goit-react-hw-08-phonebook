import { Link, NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import authSelector from 'Redax/auth/auth-selectors';
import UserMenu from 'components/UserMenu';

const Layout = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <div>
      <header
        style={{
          backgroundColor: '#c7d7e6',
          color: '#333',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Link to="/">Головна</Link>
        {isLoggedIn ? (
          <>
            <UserMenu />
            <Link to="/contacts">Контакти</Link>
          </>
        ) : (
          <nav
            style={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            <NavLink to="/registration">Реєстрація</NavLink>
            <NavLink to="/signIn">Логін</NavLink>
          </nav>
        )}
      </header>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
