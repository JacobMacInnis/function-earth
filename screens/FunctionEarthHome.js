import React from 'react';
import { AsyncStorage, Image, Text, Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class FunctionEarthHome extends React.Component {
  static navigationOptions = {
    title: 'My Function Earth',
  };
  componentDidUpdate() {
    if (!this.props.loggedIn || this.props.error) {
      this.props.navigation.navigate('Auth');
    }
  }
  
  render() {
    const loadAuthToken = () => {
      return AsyncStorage.getItem('authToken');
    };
    return (
      <View style={styles.container}>
        <View style={styles.loginLogoContainer}>
          <Image source={require('./../src/assets/images/function-earth-logo.png')} 
            style={{width: 200, height: 200}} />
          <Text style={styles.loginTitle}>Function Earth</Text>
        </View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error,
  authState: state.auth
});

export default connect(mapStateToProps)(FunctionEarthHome);