import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';
// Import Actions
import { clearAuth } from '../actions/auth';
// Import Async-Storage Function
import { clearAuthToken } from '../async-storage';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <View title='welcome-logout-container'>
          <Text title='welcome-username'>Welcome, {this.props.currentUser.username}</Text>
          <Button title='button-logout' onPress={() => this.logOut()}>Log out</Button>
        </View>
      );
    }
    return (
      <View title="header-bar">
        <Image source={require('../assets/images/function-earth-logo.png')} 
            style={{width: 200, height: 200}} />
        <Text title='title'>Function Earth</Text>
        {logOutButton}
      </View>
    );
  }
}

const mapStateToProps = state => {
    return{
        loggedIn: state.auth.currentUser !== null,
        currentUser: state.auth.currentUser
    }
};

export default connect(mapStateToProps)(HeaderBar);