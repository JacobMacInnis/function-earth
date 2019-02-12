import React from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { connect } from 'react-redux';
// Import Components
import LoginForm from './../src/components/Login-Form';
import { DismissKeyboard } from '../src/components/DismissKeyboard';
import KeyboardShift from '../src/components/KeyboardShift';
// Import Actions
import { login, authError } from './../src/actions/auth';
import { darkText } from '../src/components/helpers/textColors';

class Login extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <View style={{flex: 1}}>
        <Text
          style={{fontSize: RF(2.5),textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', color: darkText}}>Welcome To Function Earth</Text>
      </View>
    ),
  }

  onSubmitLogin(values) {
    if (values.username === null) {
      let error = {
        "location": "username",
        "message": 'username is empty',
        "status": 400
      }
      this.props.dispatch(authError(error));
    } else if (values.password === null) {
      let error = {
        "location": "password",
        "message": 'password is empty',
        "status": 400
      }
      this.props.dispatch(authError(error));
    } else {
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
    }
  }
  render() {
    return (
      <KeyboardShift>
        {() => (
        <DismissKeyboard>
          <View style={styles.loginContainer}>
            <View style={styles.loginLogoContainer}>
              <Image source={require('./../src/assets/images/function-earth-logo.png')} 
                style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}} 
                resizeMode="contain"/>
              <Text style={styles.loginTitle}>Function Earth</Text>
            </View>
            <View style={styles.loginDescriptionContainer}>
              <Text style={styles.loginDescription}>You already do good things to preserve our planet. Function Earth tracks your efforts to protect our environment and global progress. </Text>
            </View>
            <View 
              title="login-form"
              style={styles.loginForm}>
              <LoginForm onSubmit={(values) => this.onSubmitLogin(values)} />
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: hp('5%'), width: wp('60%'), margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: '#221A75'}} 
                  title="Register New Account"
                  onPress={() => this.props.navigation.navigate('Registration')} 
                >
                  <Text style={{fontSize: RF(4), alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>Register</Text>
                </TouchableOpacity>
              </View>
            </View> 
          </View>
        </DismissKeyboard>
        )}
      </KeyboardShift>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  loginLogoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: hp('4%')
  },
  loginDescriptionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    flex: 4,
  },
  loginTitle: {
    marginTop: 5,
    fontSize: RF(5.5),
    fontWeight: 'bold',
    color: darkText
  },
  loginDescription: {
    textAlign: 'center',
    fontSize: RF(3.1),
    margin: 10,
    color: darkText
  },
});
export default connect(mapStateToProps)(Login);