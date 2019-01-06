import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LoginForm from './../src/components/Login-Form';
class TestScreen extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <View style={styles.responsiveBox}>
      //     <Text style={styles.text}>
      //       This box is always 84.5% width and 17% height.</Text>
      //     <Text style={styles.text}>Test it by running this example repo in phones/emulators with screens of various dimensions and pixel per inch (ppi).</Text>
      //   </View>
      // </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginLogoContainer}>
          <Image source={require('./../src/assets/images/function-earth-logo.png')} 
          style={{width: 200, height: 200}} />
          <Text style={styles.loginTitle}>Function Earth</Text>
        </View>
        <View style={styles.loginDescriptionContainer}>
          <Text style={styles.loginDescription}>You already do good things to preserve our planet. Function Earth tracks your efforts to protect our environment and global progress. </Text>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   responsiveBox: {
//     width: wp('84.5%'),
//     height: hp('17%'),
//     borderWidth: 2,
//     borderColor: 'orange',
//     flexDirection: 'column',
//     justifyContent: 'space-around' 
//   },
//   text: {
//     color: 'white'
//   }
// });
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

export default TestScreen;
