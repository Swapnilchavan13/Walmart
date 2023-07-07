// User actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      // Simulating API call and response
      const response = await mockLogin(username, password);
      if (response.success) {
        dispatch({ type: LOGIN_SUCCESS, payload: { name: username } });
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

// Mock login function
const mockLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({ success: true });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
};
