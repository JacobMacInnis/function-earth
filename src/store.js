import { AsyncStorage } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import { loadAuthToken } from './async-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth'

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

// // const authToken = loadAuthToken();
// console.log('I did Try');
// const authToken = '';
// async function getToken() {
//     try {
//        authToken = await AsyncStorage.getItem('authToken');
//       if (authToken !== null) {
//         console.log(authToken)
//       } else {
//         console.log('NO VALUE')
//       }
//     } catch (error) {
//       console.log('AsyncStorage Error: ' + error.message);
//     }
// }
// getToken();

// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
//     store.dispatch(refreshAuthToken());
// }

export default store;