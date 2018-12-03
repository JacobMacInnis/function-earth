import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { toggleMenu } from '../src/actions/hamburgerMenu';
import { connect } from 'react-redux';

class LinkScreen extends Component {
  goHome = () => {
      this.props.navigation.navigate('Home')
      this.props.dispatch(toggleMenu());
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <View style={{width: 250, alignItems: 'flex-start', marginTop: 20}}>
        <TouchableOpacity
          onPress={this.goHome}>
          <Text style={styles.buttons}><Image source={require('../src/assets/images/function-earth-logo.png')}
          style={{width: 37, height: 37}}/> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyStats')}>
          <Text style={styles.buttons}>My Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GlobalStats')}>
          <Text style={styles.buttons}>Global Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._showMoreApp()}>
          <Text style={styles.buttons}>FE Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.signOutAsync}>
          <Text style={styles.buttons}>Log Out</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.dispatch(toggleMenu());
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  buttons: {
    fontSize: 35,
    margin: 10
  },
});

const mapStateToProps = state => {
  return{
  }
};

export default connect(mapStateToProps)(LinkScreen);