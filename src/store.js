import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// Import Reducers
import registrationReducer from './reducers/registration';
import locationReducer from './reducers/location';
import authReducer from './reducers/auth';
import statsReducer from './reducers/stats';
import entriesReducer from './reducers/entries';
import hamburgerMenuReducer from './reducers/hamburgerMenu';
import globalStatsReducer from './reducers/globalStats';

const rootReducer = combineReducers({
    registration: registrationReducer,
    location: locationReducer,
    auth: authReducer,
    stats: statsReducer,
    entries: entriesReducer,
    hamburgerMenu: hamburgerMenuReducer,
    globalStats: globalStatsReducer,
    form: formReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;