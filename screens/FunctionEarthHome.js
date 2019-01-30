import React from 'react';
import { AsyncStorage, Image, Text, Button, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { offMenu } from '../src/actions/hamburgerMenu';
import { loadAuthToken } from '../src/async-storage';
// Components
import MyImpact from '../src/components/My-Impact';
import NewEntry from '../src/components/New-Entry';
import HamburgerMenu from '../src/components/HamburgerMenu';
import LinkScreen from './LinkScreen';

class FunctionEarthHome extends React.Component {
  static navigationOptions = {
    headerRight: (
      <HamburgerMenu />
    ),
    title: 'Function Earth'
  };
  componentDidUpdate() {
    if (!this.props.loggedIn || this.props.error) {
      this.props.navigation.navigate('Auth');
    }
    if (this.props.entryType !== null && this.props.newEntry) {
      this.props.navigation.navigate('EntryScreen');
    }
  }
  render() {
    if (this.props.HamburgerMenuActive) {
      return (
        <LinkScreen signOutAsync={this._signOutAsync} navigation={this.props.navigation}/>
      )
    }
    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 3}}>
          <Image source={require('./../src/assets/images/function-earth-logo2.png')} 
            style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}} resizeMode="contain"/>
        </View>
        <View style={{flex: 10, alignSelf: 'center'}}>
          <MyImpact />
        </View>
        <View style={{flex: 19, alignSelf: 'center'}}>
          <NewEntry />
        </View>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.dispatch(offMenu());
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  
});

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error,
  authState: state.auth,
  entryType: state.entries.type,
  newEntry: state.entries.openEntryScreen,
  HamburgerMenuActive: state.hamburgerMenu.active
});

export default connect(mapStateToProps)(FunctionEarthHome);