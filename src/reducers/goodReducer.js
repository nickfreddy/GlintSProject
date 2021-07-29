import { GET_ALL_GOODS, GOOD_ERROR } from '../actions/types';

const initialState = {
  allGoods: null,
  loading: false,
  error: [],
};

const goodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GOODS:
      return {
        ...state,
        loading: false,
        allGoods: action.payload,
      };
    case GOOD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default goodReducer;
