import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { connect } from 'react-redux';

// Import Components
import { DismissKeyboard } from '../src/components/DismissKeyboard';
import KeyboardShift from '../src/components/KeyboardShift';
import RegistrationForm from './../src/components/Registration-Form';
// Import Actions
import { registerUser }  from './../src/actions/users';
import { login } from './../src/actions/auth';
import { lightText, darkText } from '../src/components/helpers/textColors';
import { authButton, authButtonText } from '../src/components/styles/authStyles';

class Registration extends React.Component {
  static navigationOptions = { header: null }
  onSubmitRegistration(values) {
    const { username, password, email } = values;
    const user = { username, password, email };
    this.props.dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => {
        if (this.props.loggedIn) {
        this.props.navigation.navigate('UserLocation');
        }
      })
      .catch(err => {
        console.log(err);
      })  
  }
  render() {
    let Registration = <Text style={styles.registrationText}>Registration</Text>;
    if (this.props.registrationLoading) {
      Registration = <Text style={styles.registrationText}>Loading</Text>
    } else if (this.props.registrationError) {
      Registration = <Text style={{
        justifyContent: 'flex-end',
        textAlign: 'center',
        color: 'red'
      }}>{this.props.registrationError.message}</Text>
    }
    return (
      <KeyboardShift>
        {() => (
        <DismissKeyboard>
          <View style={styles.registrationContainer}>
            <View style={styles.registrationLogoContainer}>
              <Image source={require('./../src/assets/images/function-earth-logo2.png')} 
                style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}} 
                resizeMode="contain"/>
            </View>
            <View style={styles.registrationTitle}>{Registration}</View>
            <View style={styles.registrationForm}>
              <RegistrationForm
                onSubmit={(values) => this.onSubmitRegistration(values)}/>
            </View>
            <View style={styles.loginForm}>
              <TouchableOpacity
                style={[ authButton, { backgroundColor: '#221A75' }]} 
                title="Back To Login"
                onPress={() => this.props.navigation.goBack()} 
              >
                <Text style={authButtonText}>Back To Login</Text>
              </TouchableOpacity>
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
  registrationLoading: state.registration.loading,
  registrationError: state.registration.error
});

const styles = StyleSheet.create({
  registrationContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: darkText
  },
  registrationLogoContainer: {
    flex: 5,
    marginTop: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationTitle: {
    flex: 1,
  },
  registrationText: {
    color: lightText,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    textAlign: 'center',
    fontSize: RF(4),
  },
  registrationForm: {
    flex: 9
  },
  loginForm: {
    flex: 2,
    alignItems: 'center'
  }
});

export default connect(mapStateToProps)(Registration);
