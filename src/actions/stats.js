import { API_BASE_URL } from './../config';

export const STATS_REQUEST = 'STATS_REQUEST';
export const statsRequest = () => ({
    type: STATS_REQUEST
});

export const STATS_SUCCESS = 'STATS_SUCCESS';
export const statsSuccess = stats => ({
    type: STATS_SUCCESS,
    stats
});

export const STATS_ERROR = 'STATS_ERROR';
export const statsError = error => ({
    type: STATS_ERROR,
    error
});

export const getStats = () => (dispatch, getState) => {
  dispatch(statsRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/stats`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          },
      })
      .then(res => res.json())
      .then((stats) => {
        dispatch(statsSuccess(stats))
      })
      .catch(err => {
        dispatch(statsError(err));
              
      })
};