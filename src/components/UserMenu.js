import authSelector from 'Redax/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'Redax/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelector.getUsername);
  const userEmail = useSelector(authSelector.getUserEmail);

  return (
    <div>
      <p>{userEmail}</p>
      <p>{userName}</p>
      <button type="button" to="/" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
