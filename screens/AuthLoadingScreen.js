import React from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';

// Import Screens
import PreLoadScreen from './PreLoadScreen';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import UserLocation from './UserLocation';
import FunctionEarthHome from './FunctionEarthHome';
import EntryScreen from './EntriesScreen';
import MyStatsScreen from './MyStatsScreen';
import GlobalStatsScreen from './GlobalStatsScreen';
import PrivacyScreen from './PrivacyScreen';
// import OtherScreen from './OtherScreen';
import CameraScreen from './CameraScreen';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('PreLoad');
    }
  }
  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ 
  Home: FunctionEarthHome, 
  EntryScreen: EntryScreen, 
  GlobalStats: GlobalStatsScreen,
  MyStats: MyStatsScreen,
  PrivacyScreen: PrivacyScreen,
  CameraScreen: CameraScreen
  // Other: OtherScreen
});

const AuthStack = createStackNavigator({ 
  Login: LoginScreen, 
  Registration: RegistrationScreen, 
  UserLocation: UserLocation
});
const PreLoadStack = createStackNavigator({ 
  PreLoadScreen
});

export default connect(mapStateToProps)(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    PreLoad: PreLoadStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
));