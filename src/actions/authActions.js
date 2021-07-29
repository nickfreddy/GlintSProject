import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  AUTH_ERROR,
  AUTH_SIGNOUT,
  LOAD_ME,
} from './types';

import axios from 'axios';
import qs from 'qs';

export const authSignUp = (formData) => async (dispatch) => {
  let data = qs.stringify(formData);

  let config = {
    method: 'post',
    url: '/auth/signup',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  try {
    let response = await axios(config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.response,
    });
  }
};

export const authSignIn = (formData) => async (dispatch) => {
  let data = qs.stringify(formData);

  let config = {
    method: 'post',
    url: '/auth/signin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  try {
    let response = await axios(config);

    dispatch({
      type: SIGNIN_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.response,
    });
  }
};

export const authSignOut = () => async (dispatch) =>
  dispatch({ type: AUTH_SIGNOUT });

export const authWithOauth = (token) => async (dispatch) => {
  try {
    let config = {
      method: 'get',
      url: '/auth/me',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let response = await axios(config);

    dispatch({
      type: LOAD_ME,
      payload: response.data.data,
    });

    dispatch({
      type: SIGNIN_SUCCESS,
      payload: { token },
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};

export const loadMe = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      let config = {
        method: 'get',
        url: '/auth/me',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };

      let response = await axios(config);

      dispatch({
        type: LOAD_ME,
        payload: response.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};
