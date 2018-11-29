import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from './../config';
import { normalizeResponseErrors } from './utils';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const registrationRequest = () => ({
    type: REGISTRATION_REQUEST
});

export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const registrationSuccess = () => ({
    type: REGISTRATION_SUCCESS
});

export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const registrationError = error => ({
    type: REGISTRATION_ERROR,
    error
});
export const LOCATION_REQUEST = 'LOCATION_REQUEST';
export const locationRequest = () => ({
  type: LOCATION_REQUEST
});

export const LOCATION_SUCCESS = 'LOCATION_SUCCESS';
export const locationSuccess = () => ({
  type: LOCATION_SUCCESS
});

export const LOCATION_ERROR = 'LOCATION_ERROR';
export const locationError = error => ({
  type: LOCATION_ERROR,
  error
});

export const registerUser = user => dispatch => {
    dispatch(registrationRequest);
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {
          dispatch(registrationSuccess())})
        .catch(err => {
          dispatch(registrationError(err));
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {

                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
export const userLocation = values => (dispatch, getState) => {
  dispatch(locationRequest);
    const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users/stats`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(values)
  })
  .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(() => {
        dispatch(locationSuccess())})
      .catch(err => {
        dispatch(locationError(err));
          const {reason, message, location} = err;
          if (reason === 'ValidationError') {
              // Convert ValidationErrors into SubmissionErrors for Redux Form
              return Promise.reject(
                  new SubmissionError({
                      [location]: message
                  })
              );
          }
      });
}