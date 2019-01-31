import React from 'react';
import { View, Image, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setAuthToken, refreshAuthToken } from '../src/actions/auth'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";


class PreLoadScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      userChecking: true,
      loggedIn: false
    }
  }
  async componentDidMount() {
    try {
      let promise = new Promise((resolve, reject) => {
        const value = AsyncStorage.getItem('authToken');
        resolve(value);
      });
      let token = await promise;
      if (token) {
        return this.props.dispatch(setAuthToken(token))
      }
    } catch (error) {
      this.setState({
        userChecking: false,
        loggedIn: false
      });
    }
    this.props.navigation.navigate('Login'); 
  }
  componentDidUpdate(prevProps) {
    if (prevProps.authToken !== this.props.authToken) {
      if (this.props.authToken !== null) {
        this.props.dispatch(refreshAuthToken())
      }
    }
    if (this.props.loggedIn) {
      this.props.navigation.navigate('App');
    } else if (this.state.userChecking === false && this.state.loggedIn === false) {
      this.props.navigation.navigate('Login');
    }
  }
  
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
        <View style={{height: hp('25%')}}>
          <Image source={require('./../src/assets/images/function-earth-logo2.png')} 
            style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}} 
            resizeMode="contain"/>
        </View>
        <View style={{alignContent: 'center'}}>
          <Text style={{alignSelf: 'center',color: 'white', fontSize: RF(5)}}>LOADING</Text>
        </View>
      </View>);
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  authToken: state.auth.authToken
});

export default connect(mapStateToProps)(PreLoadScreen);