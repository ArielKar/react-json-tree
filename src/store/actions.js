export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const createFetchStart = () => {
  return {
    type: FETCH_START,
  };
};

const createFetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

const createFetchFailure = (errorMsg = '') => {
  return {
    type: FETCH_FAILURE,
    payload: errorMsg,
  };
};

export const fetchData = url => async dispach => {
  try {
    dispach(createFetchStart());
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error();
    }
    const data = await response.json();
    dispach(createFetchSuccess(data));
  } catch (error) {
    dispach(createFetchFailure('Failed to fetch data, wrong response'));
  }
};
