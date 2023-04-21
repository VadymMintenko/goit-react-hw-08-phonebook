import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/user">UserMenu</NavLink>
        </nav>
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
