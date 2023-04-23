import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelector from 'Redax/auth/auth-selectors';

const Home = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const user = useSelector(authSelector.getUsername);
  return (
    <>
      {isLoggedIn ? (
        <h2>Вітаємо {user}</h2>
      ) : (
        <h2>
          Для того що користуватись сервісом, вам потрібно{' '}
          <span>
            <Link to="signIn">авторизуватись</Link>
          </span>
        </h2>
      )}
    </>
  );
};

export default Home;
