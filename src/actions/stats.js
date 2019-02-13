import { API_BASE_URL } from './../config';
import { normalizeResponseErrors } from './utils';

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
export const SWITCH_OFF_NO_STATS = 'SWITCH_OFF_NO_STATS';
export const switchOffNoStats = () => ({
    type: SWITCH_OFF_NO_STATS
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
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then((stats) => {
        dispatch(statsSuccess(stats))
      })
      .catch(err => {
        dispatch(statsError(err));
      })
};