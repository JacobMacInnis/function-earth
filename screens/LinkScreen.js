import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { toggleMenu } from '../src/actions/hamburgerMenu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { clearAuthToken } from '../src/async-storage';

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
          >
            <Text style={styles.buttonText}>
              <Image source={require('../src/assets/images/function-earth-logo.png')}style={styles.logo}/> Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MyStats')}>
            <Text style={styles.buttonText}>My Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('GlobalStats')}>
            <Text style={styles.buttonText}>Global Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CameraScreen')}>
            <Text style={styles.buttonText}>Camera Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PrivacyScreen')}>
            <Text style={styles.buttonText}>Privacy</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => this._showMoreApp()}>
            <Text style={styles.buttons}>FE Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Test')}>
            <Text style={styles.buttons}>TestScreen</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={this.props.signOutAsync}>
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
    backgroundColor: 'white'
  },
  innerContainer: {
    width: wp('80%'), 
    alignItems: 'flex-start', 
    marginTop: 20
  },
  logo: {
    width: 37, 
    height: 37
  },
  buttonContainer: {
    borderColor: 'grey',
    borderWidth: 1
  },
  buttonText: {
    fontSize: RF(4.5),
    margin: 10
  },
});

const mapStateToProps = state => {
  return{
  }
};

export default connect(mapStateToProps)(LinkScreen);