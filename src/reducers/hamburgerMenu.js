import {
  TOGGLE_MENU,
  OFF_MENU
} from '../actions/hamburgerMenu';

const initialState = {
  active: false
};

export default function reducer(state = initialState, action) {
  if (action.type === TOGGLE_MENU) {
      return Object.assign({}, state, {
          active: !state.active
      });
  } else if (action.type === OFF_MENU) {
    return Object.assign({}, state, {
      active: false
    });
  } else {
    return state;
  }
};