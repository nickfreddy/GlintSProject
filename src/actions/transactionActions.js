import {
  GET_ALL_TRANSACTIONS,
  GET_ONE_TRANSACTION,
  CREATE_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR,
} from './types';
import axios from 'axios';
import qs from 'qs';
import setAuthToken from '../utils/setAuthToken';

export const getAllTransactions = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  let config = {
    method: 'get',
    url: '/transactions',
  };

  try {
    let response = await axios(config);

    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
};

export const getOneTransaction = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  let config = {
    method: 'get',
    url: `/transactions/${id}`,
  };

  try {
    let response = await axios(config);

    dispatch({
      type: GET_ONE_TRANSACTION,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
};

export const createTransaction = (formData) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  let data = qs.stringify(formData);

  let config = {
    method: 'post',
    url: '/transactions',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  try {
    let response = await axios(config);

    dispatch({
      type: CREATE_TRANSACTION,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
};

export const updateTransaction = (formData, id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  let data = qs.stringify(formData);

  var config = {
    method: 'put',
    url: `/transactions/${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  try {
    let response = await axios(config);

    dispatch({
      type: UPDATE_TRANSACTION,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
};

export const deleteTransaction = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  let config = {
    method: 'delete',
    url: `/transactions/${id}`,
  };

  try {
    await axios(config);

    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
};
