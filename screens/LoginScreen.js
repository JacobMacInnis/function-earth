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
import { darkText, lightText } from '../src/components/helpers/textColors';
import { authButton, authButtonText } from '../src/components/styles/authStyles';


import { GOOGLE_CLIENT_ID, API_V1_AUTH_GOOGLE} from '../src/config';

class Login extends React.Component {

  static navigationOptions = { header: null }


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
              <Text style={styles.loginTitle}>Function Earth</Text>
              <Image source={require('./../src/assets/images/function-earth-logo2.png')} 
                style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch', marginTop: hp('2%')}} 
                resizeMode="contain"/>
              
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
                  style={[authButton, { backgroundColor: '#221A75' }]} 
                  title="Register New Account"
                  onPress={() => this.props.navigation.navigate('Registration')} 
                >
                  <Text style={ authButtonText }>Register</Text>
                </TouchableOpacity>
              </View>
            </View> 
            <View>
              <View>
                <Text>Login With Google</Text>
                <View style={{backgroundColor: 'red'}}>
  
                </View>
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
    backgroundColor: darkText,
  },
  loginLogoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkText,
    marginTop: hp('8%')
  },
  loginDescriptionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: wp('90%')
  },
  loginForm: {
    flex: 4,
  },
  loginTitle: {
    marginTop: 5,
    fontSize: RF(5.5),
    fontWeight: 'bold',
    color: lightText
  },
  loginDescription: {
    textAlign: 'center',
    fontSize: RF(3.1),
    margin: 10,
    color: lightText
  },
});
export default connect(mapStateToProps)(Login);