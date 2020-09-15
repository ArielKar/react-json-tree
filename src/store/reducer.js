import * as actionTypes from './actions';

const initialState = {
  isLoading: false,
  data: null,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }
    case actionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: '',
        data: action.payload,
      };
    }
    case actionTypes.FETCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
