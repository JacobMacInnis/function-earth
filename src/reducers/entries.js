// import {
//   LOCATION_REQUEST,
//   LOCATION_SUCCESS,
//   LOCATION_ERROR
// } from './../actions/users';

// const initialState = {
//   loctionCreated: false,
//   loading: false,
//   error: null
// };

// export default function reducer(state = initialState, action) {
//   if (action.type === LOCATION_REQUEST) {
//       return Object.assign({}, state, {
//           loading: true,
//           error: null
//       });
//   } else if (action.type === LOCATION_SUCCESS) {
//       return Object.assign({}, state, {
//           locationCreated: true,
//           loading: false,
//           error: null
//       });
//   } else if (action.type === LOCATION_ERROR) {
//       return Object.assign({}, state, {
//           loading: false,
//           error: action.error
//       });
//   }
//   return state;
// };