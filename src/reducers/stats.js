import {
  STATS_REQUEST,
  STATS_SUCCESS,
  STATS_ERROR,
  SWITCH_OFF_NO_STATS
} from './../actions/stats';

const initialState = {
  stats: {},
  loading: false,
  error: null,
  noStats: null
};

export default function reducer(state = initialState, action) {
  if (action.type === STATS_REQUEST) {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  } else if (action.type === STATS_SUCCESS) {
      return Object.assign({}, state, {
          stats: action.stats,
          loading: false,
          error: null
      });
  } else if (action.type === SWITCH_OFF_NO_STATS) {
      return Object.assign({}, state, {
        noStats: null
      })
  } else if (action.type === STATS_ERROR && action.error.message === 'no user stats object in db') {
      return Object.assign({}, state, {
          loading: false,
          error: action.error,
          noStats: true
      });
  } else if (action.type === STATS_ERROR && action .error.message !== 'no user stats object in db') {
    return Object.assign({}, state, {
        loading: false,
        error: action.error
    });
}
  return state;
};