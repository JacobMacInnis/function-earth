import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './async-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth'

// Import Reducers
import registrationReducer from './reducers/registration';
import locationReducer from './reducers/location';
import authReducer from './reducers/auth';
import statsReducer from './reducers/stats';
import entriesReducer from './reducers/entries';
import hamburgerMenuReducer from './reducers/hamburgerMenu';

const rootReducer = combineReducers({
    registration: registrationReducer,
    location: locationReducer,
    auth: authReducer,
    stats: statsReducer,
    entries: entriesReducer,
    hamburgerMenu: hamburgerMenuReducer,
    form: formReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;