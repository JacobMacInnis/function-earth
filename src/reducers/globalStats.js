import {
  GLOBAL_STATS_REQUEST,
  GLOBAL_STATS_SUCCESS,
  GLOBAL_STATS_ERROR
} from '../actions/globalStats';

const initialState = {
  globalStats: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === GLOBAL_STATS_REQUEST) {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  } else if (action.type === GLOBAL_STATS_SUCCESS) {
      return Object.assign({}, state, {
          globalStats: action.res,
          loading: false,
          error: null
      });
  } else if (action.type === GLOBAL_STATS_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      });
  } else {
    return state;
  }
};