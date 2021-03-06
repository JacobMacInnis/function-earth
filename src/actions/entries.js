import { API_BASE_URL } from './../config';

export const ENTRIES = 'ENTRIES';
export const entries = entry => ({
  type: ENTRIES,
  entry
});
export const LEAVE_ENTRY_SCREEN = 'LEAVE_ENTRY_SCREEN';
export const leaveEntryScreen = () => ({
  type: LEAVE_ENTRY_SCREEN
});

export const NEW_ENTRY_REQUEST = 'NEW_ENTRY_REQUEST';
export const newEntryRequest = () => ({
    type: NEW_ENTRY_REQUEST
});

export const NEW_ENTRY_SUCCESS = 'NEW_ENTRY_SUCCESS';
export const newEntrySuccess = res => ({
    type: NEW_ENTRY_SUCCESS,
    res
});

export const NEW_ENTRY_ERROR = 'NEW_ENTRY_ERROR';
export const newEntryError = error => ({
    type: NEW_ENTRY_ERROR,
    error
});

export const NEW_ENTRY_IMAGE = 'NEW_ENTRY_IMAGE';
export const newEntryImage = image => ({
  type: NEW_ENTRY_IMAGE,
  image
});

export const REMOVE_ENTRY_IMAGE = 'REMOVE_ENTRY_IMAGE';
export const removeEntryImage = () => ({
  type: REMOVE_ENTRY_IMAGE
});

export const newEntry = entry => (dispatch, getState) => {
  dispatch(newEntryRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/entries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          },
          body: JSON.stringify(entry)
      })
      .then(res => res.json())
      .then((res) => {
        dispatch(newEntrySuccess(res))
      })
      .catch(err => {
        dispatch(newEntryError(err));
              
      })
};