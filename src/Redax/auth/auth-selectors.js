const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getIsRefreshing = state => state.auth.getIsRefreshing;

const authSelector = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getIsRefreshing,
};

console.log(authSelector.getUsername);

export default authSelector;
