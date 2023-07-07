// User actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const login = (username, password) => {
  // Simulating an API call to validate login credentials
  return async (dispatch) => {
    try {
      const response = await api.login(username, password);
      if (response.success) {
        dispatch({ type: LOGIN_SUCCESS, payload: response.user });
      } else {
        // Handle login failure
      }
    } catch (error) {
      // Handle API call error
    }
  };
};

export const logout = () => {
  return { type: LOGOUT_SUCCESS };
};
