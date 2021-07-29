import { GET_ALL_CUSTOMERS, CUSTOMER_ERROR } from '../actions/types';

const initialState = {
  allCustomers: null,
  loading: false,
  error: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        loading: false,
        allCustomers: action.payload,
      };
    case CUSTOMER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
