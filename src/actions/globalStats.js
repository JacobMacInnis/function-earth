import { API_BASE_URL } from './../config';

export const GLOBAL_STATS_REQUEST = 'GLOBAL_STATS_REQUEST';
export const globalStatsRequest = () => ({
    type: GLOBAL_STATS_REQUEST
});

export const GLOBAL_STATS_SUCCESS = 'GLOBAL_STATS_SUCCESS';
export const globalStatsSuccess = res => ({
    type: GLOBAL_STATS_SUCCESS,
    res
});

export const GLOBAL_STATS_ERROR = 'GLOBAL_STATS_ERROR';
export const globalStatsError = error => ({
    type: GLOBAL_STATS_ERROR,
    error
});

export const globalStats = () => (dispatch, getState) => {
  dispatch(globalStatsRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/globalstats`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
      })
      .then(res => res.json())
      .then((res) => {
        dispatch(globalStatsSuccess(res))
      })
      .catch(err => {
        dispatch(globalStatsError(err));
              
      })
};