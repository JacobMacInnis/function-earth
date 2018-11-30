import {
  ENTRIES,
  LEAVE_ENTRY_SCREEN
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
  } else if (action.type === LEAVE_ENTRY_SCREEN) {
    return Object.assign({}, state, {
        type: null,
        openEntryScreen: false
    });
  } else {
    return state;
  }
};