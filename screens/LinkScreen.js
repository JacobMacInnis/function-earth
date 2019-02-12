import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { toggleMenu } from '../src/actions/hamburgerMenu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { clearAuthToken } from '../src/async-storage';
import { darkText, lightText } from '../src/components/helpers/textColors';

class LinkScreen extends Component {
  goHome = () => {
      this.props.navigation.navigate('Home')
      this.props.dispatch(toggleMenu());
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={this.goHome}
            style={[styles.buttonContainer, {backgroundColor: '#D87743'}]}
          >
            <Text style={styles.buttonText}>
              <Image source={require('../src/assets/images/function-earth-logo2.png')}
              style={styles.logo}/> Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonContainer, {backgroundColor: '#1C7C3C'}]}
            onPress={() => this.props.navigation.navigate('MyStats')}
            >
            <Text style={styles.buttonText}>My Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonContainer, {backgroundColor: '#221A75'}]}
            onPress={() => this.props.navigation.navigate('GlobalStats')}>
            <Text style={styles.buttonText}>Global Stats</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('CameraScreen')}>
            <Text style={styles.buttonText}>Camera Screen</Text>
          </TouchableOpacity> */}
          <TouchableOpacity 
            style={[styles.buttonContainer, {backgroundColor: '#5B5340'}]}
            onPress={() => this.props.navigation.navigate('PrivacyScreen')}
          >
            <Text style={styles.buttonText}>Privacy</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => this._showMoreApp()}>
            <Text style={styles.buttons}>FE Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Test')}>
            <Text style={styles.buttons}>TestScreen</Text>
          </TouchableOpacity> */}
          <TouchableOpacity 
            style={[styles.buttonContainer, {backgroundColor: '#D87743'}]}
            onPress={this.props.signOutAsync}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.removeItem('authToken');
    this.props.dispatch(toggleMenu());
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: lightText
  },
  innerContainer: {
    width: wp('80%'), 
    alignItems: 'flex-start', 
    marginTop: 20
  },
  logo: {
    width: 37, 
    height: 37,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: wp('60%'),
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: lightText,
    fontWeight: 'bold',
    fontSize: RF(4.5),
    margin: 10
  },
});

const mapStateToProps = state => {
  return{
  }
};

export default connect(mapStateToProps)(LinkScreen);


['#1C7C3C', '#221A75', '#5B5340', '#D87743' ]
// Earth
// normal #1C7C3C
// light #599F71
// dark #1A7137

// Ocean
// normal #221A75
// light #36307B
// dark #0A0256

// Animal
// normal #5B5340
// light #787262
// dark #534C3b

// Humanity
// normal #D87743
// light #DB8354
// dark #B16237