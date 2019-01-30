import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from './../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken,  } from './../async-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});


export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => {
              return storeAuthInfo(authToken, dispatch)
            })
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const refreshAuthToken = (token) => (dispatch, getState) => {
  dispatch(authRequest());
    // const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
            // Provide our existing token as credentials to get a new one
    Authorization: `Bearer ${token}`
    }
  })
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(({authToken}) => storeAuthInfo(authToken, dispatch))
	.catch(err => {
			// We couldn't get a refresh token because our current credentials
			// are invalid or expired, or something else went wrong, so clear
			// them and sign us out
			dispatch(authError(err));
			dispatch(clearAuth());
			clearAuthToken(authToken);
  });
};

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(authSuccess(decodedToken.user));
	saveAuthToken(authToken);
};

export const authGetToken = () => {
	return (dispatch, getState) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token;
			if (!token) {
				let fetchedToken;
				AsyncStorage.getItem("authToken")
					.catch(err => reject())
					.then(tokenFromStorage => {
						fetchedToken = tokenFromStorage;
						if (!tokenFromStorage) {
							reject();
							return;
						}
					})
					.then(() => {
						dispatch(setAuthToken(fetchedToken));
						resolve(fetchedToken);
					})
					.catch(err => reject());
			} else {
				resolve(token);
			}
		});
		return promise
			.catch(err => {
				return AsyncStorage.getItem("authToken")
					.then(refreshToken => {
						return refreshAuthToken(refreshToken)
					})
			})
			.then(token => {
				if (!token) {
					throw new Error();
				} else {
					return token;
				}
			});
	};
};
  
export const authAutoSignIn = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        // startMainTabs();	
      })
      .catch(err => console.log("Failed to fetch token!"));
  };
};