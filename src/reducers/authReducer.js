import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  AUTH_ERROR,
  AUTH_SIGNOUT,
  LOAD_ME,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  error: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      // localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case LOAD_ME:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case AUTH_SIGNOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
