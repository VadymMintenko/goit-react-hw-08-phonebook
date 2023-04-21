import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      In order to use the application, you need to{' '}
      <span>
        {' '}
        <NavLink to="/registration">Registration</NavLink>
      </span>
      !
    </>
  );
};

export default Home;
