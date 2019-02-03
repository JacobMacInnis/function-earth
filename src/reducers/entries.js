import {
  ENTRIES,
  LEAVE_ENTRY_SCREEN,
  NEW_ENTRY_REQUEST,
  NEW_ENTRY_SUCCESS,
  NEW_ENTRY_ERROR,
  NEW_ENTRY_IMAGE
} from '../actions/entries';

const initialState = {
  type: null,
  openEntryScreen: false,
  loading: false,
	error: null,
	image: false
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
  } else if (action.type === NEW_ENTRY_REQUEST) {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  } else if (action.type === NEW_ENTRY_SUCCESS) {
      return Object.assign({}, state, {
          stats: action.res,
          loading: false,
          error: null
      });
  } else if (action.type === NEW_ENTRY_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      });
	} else if (action.type === NEW_ENTRY_IMAGE) {
			return Object.assign({}, state, {
				image: action.image
			}); 
	} else {
    return state;
	}
};