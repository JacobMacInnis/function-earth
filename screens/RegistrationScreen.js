import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// Import Components
import RegistrationForm from './../src/components/Registration-Form';

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
        fontSize: 25,
        margin: 10,
        color: 'red'
      }}>{this.props.registrationError.message}</Text>
    }
    return (
      <View style={styles.registrationContainer}>
        <View style={styles.registrationLogoContainer}>
          <Image source={require('./../src/assets/images/function-earth-logo.png')} 
            style={{width: 150, height: 150}} />
          {/* <Text style={styles.loginTitle}>Function Earth</Text> */}
        </View>
        {<Text style={styles.registrationText}>{Registration}</Text>}
        <View style={styles.registrationForm}>
          <RegistrationForm
            onSubmit={(values) => this.onSubmitRegistration(values)}/>
        </View>
        <View style={styles.backButton}>
          <Button
            title="Already Signed Up? Login"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
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
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // loginTitle: {
  //   marginTop: 5,
  //   fontSize: 40,
  //   fontWeight: 'bold',
  // },
  // registrationText: {
  //   justifyContent: 'flex-end',
  //   textAlign: 'center',
  //   fontSize: 25,
  //   margin: 10,
  // },
  // registrationForm: {
  //   flex: 8,
  // },
  // backButton: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   marginBottom: 25,
  // }
});

export default connect(mapStateToProps)(Registration);
