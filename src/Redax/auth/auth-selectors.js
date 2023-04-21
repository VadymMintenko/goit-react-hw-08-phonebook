const getIsLoggedIn = state => state.auth.isLogggedIn;
const getUsername = state => state.auth.user.name;

const authSelector = {
  getIsLoggedIn,
  getUsername,
};

export default authSelector;
