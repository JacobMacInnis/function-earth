import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
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

class Registration extends React.Component {
  static navigationOptions = {
    title: 'Function Earth Registration',
  };
  onSubmitRegistration(values) {
    const { username, password, firstName } = values;
    const user = { username, password, firstName };
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
              <Image source={require('./../src/assets/images/function-earth-logo.png')} 
                style={{width: 150, height: 150}} />
              {/* <Text style={styles.loginTitle}>Function Earth</Text> */}
            </View>
            <View style={styles.registrationTitle}>{Registration}</View>
            <View style={styles.registrationForm}>
              <RegistrationForm
                onSubmit={(values) => this.onSubmitRegistration(values)}/>
            </View>
            <View style={styles.loginForm}>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: hp('5%'), width: wp('60%'), margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: 'blue'}} 
                title="Back To Login"
                onPress={() => this.props.navigation.goBack()} 
              >
                <Text style={{fontSize: 25, alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>Back To Login</Text>
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
    backgroundColor: 'white'
  },
  registrationLogoContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationTitle: {
    flex: 1
  },
  registrationText: {
    justifyContent: 'flex-end',
    textAlign: 'center',
    fontSize: RF(3.5),
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
