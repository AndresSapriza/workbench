export default {
  users: [],
  apiCallsInProgress: 0,
  userSession: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: {},
  },
};
