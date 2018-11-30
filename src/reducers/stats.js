import {
  STATS_REQUEST,
  STATS_SUCCESS,
  STATS_ERROR
} from './../actions/stats';

const initialState = {
  stats: {},
  loading: false,
  error: null
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
  } else if (action.type === STATS_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      });
  }
  return state;
};