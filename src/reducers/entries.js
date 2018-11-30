import {
  ENTRIES
} from '../actions/entries';

const initialState = {
  type: null,
  openEntryScreen: false
};

export default function reducer(state = initialState, action) {
  if (action.type === ENTRIES) {
      return Object.assign({}, state, {
          type: action.entry,
          openEntryScreen: true
      });
  } else {
    return state;
  }
};