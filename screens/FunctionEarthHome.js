import React from 'react';
import { AsyncStorage, Image, Text, Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { offMenu } from '../src/actions/hamburgerMenu';

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
    const loadAuthToken = () => {
      return AsyncStorage.getItem('authToken');
    };
    if (this.props.HamburgerMenuActive) {
      return (
        <LinkScreen signOutAsync={this._signOutAsync} navigation={this.props.navigation}/>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.loginLogoContainer}>
          <Image source={require('./../src/assets/images/function-earth-logo.png')} 
            style={{alignSelf: 'center', width: 100, height: 100, marginTop: 10}} />
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Function Earth</Text>
        </View>
        <MyImpact />
        <NewEntry />
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
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