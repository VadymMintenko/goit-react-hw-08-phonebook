import UserMenu from './UserMenu';
import { Outlet } from 'react-router-dom';
// import AuthNav from './AuthNav';
import Home from 'pages/Home';
import { useSelector } from 'react-redux';
import authSelector from 'Redax/auth/auth-selectors';
import AutorizationForm from './AutorazationForm';
const AppBar = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <header
        style={{ backgroundColor: 'navy', color: 'white', padding: '1rem' }}
      >
        {' '}
        <Home />
        {isLoggedIn && <UserMenu />}
      </header>
      <Outlet />
      {!isLoggedIn && <AutorizationForm />}
    </>
  );
};

export default AppBar;
