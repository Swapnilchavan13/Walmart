import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/userActions";

const initialState = {
  isLoggedIn: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
