
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import SwitchScreen from './screens/AuthLoadingScreen';
// import Home from './FunctionEarth';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <SwitchScreen />
      </Provider>
    );
  };
};
