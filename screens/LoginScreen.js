import React from 'react';
import { View,Text, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

// Import Components
import LoginForm from './../src/components/Login-Form';

// Import Actions
import { login } from './../src/actions/auth';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Welcome To Function Earth',
  };
  onSubmitLogin(values) {
    const {username, password} = values;
    this.props.dispatch(login(username, password))
      .then(() => {
        if (this.props.loggedIn) {
          this.props.navigation.navigate('App');
        };
      })
      .catch(err => {
        console.log(err)
      });
  };
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.loginLogoContainer}>
          <Image source={require('./../src/assets/images/function-earth-logo.png')} 
            style={{width: 200, height: 200}} />
          <Text style={styles.loginTitle}>Function Earth</Text>
        </View>
        <View style={styles.loginDescriptionContainer}>
          <Text style={styles.loginDescription}>You already do good things to preserve our planet. Function Earth tracks your efforts to protect our environment and global progress.</Text>
        </View>
        <View 
          title="login-form"
          style={styles.loginForm}>
          <LoginForm onSubmit={(values) => this.onSubmitLogin(values)} />
          <Button 
            title='Register New Account' 
            onPress={() => this.props.navigation.navigate('Registration')}
          />     
        </View> 
      </View>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  loginLogoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  loginTitle: {
    marginTop: 5,
    fontSize: 40,
    fontWeight: 'bold'
  },
  loginDescriptionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginDescription: {
    textAlign: 'center',
    fontSize: 25,
    margin: 10
  },
  loginForm: {
    flex: 3,
    // justifyContent: 'flex-start',
  }
});
export default connect(mapStateToProps)(Login);