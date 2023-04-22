import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>
        Для того що користуватись сервісом, вам потрібно{' '}
        <span>
          <Link to="signIn">авторизуватись</Link>
        </span>
      </h2>
    </>
  );
};

export default Home;
