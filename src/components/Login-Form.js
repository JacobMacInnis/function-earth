import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { darkText, lightText } from './helpers/textColors';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }
  render() {
    let values = {username: this.state.username, password: this.state.password};
    return (
      <View title="login-form">
        <View title="form-error" aria-live="polite" style={{alignItems: 'center'}}>
          <Text style={{color:'red', fontSize: RF(3)}}>{this.props.loginError ? this.props.loginError.message : ''}</Text>
        </View>
        <View style={{ alignItems: 'center'}}>
          <Text style={{ color: lightText, fontSize: RF(2.5)}}>Username</Text>
          <TextInput
            value={this.state.username}
            style={{ color: lightText, backgroundColor: '#424039', borderColor: lightText, borderWidth: 1, borderRadius: 10, height: hp('5%'), width: wp('60%'), fontSize: RF(2.5)}}
            textAlign={'center'}
            onChangeText={username => this.setState({username})}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: lightText, fontSize: RF(2.5)}}>Password</Text>
          <TextInput
            value={this.state.password}
            style={{ color: lightText, backgroundColor: '#424039', borderColor: lightText, borderWidth: 1, borderRadius: 10, height: hp('5%'), width: wp('60%'), fontSize: RF(2.5)}}
            textAlign={'center'}
            onChangeText={password => this.setState({password})}
            secureTextEntry={true}
            autoCapitalize='none'/>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 10, borderColor: 'white', height: hp('5%'), width: wp('60%'), margin: 10, justifyContent: 'center',  shadowColor: 'white', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: '#1C7C3C'}} 
            title="login" 
            onPress={() => this.props.onSubmit(values)} 
          >
            <Text style={{fontSize: RF(4), alignSelf: 'center', fontWeight: 'bold', color: lightText }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
//     width: wp('84.5%'),
//     height: hp('17%')
const mapStateToProps = state => ({
  loginError: state.auth.error
});
export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(connect(mapStateToProps)(LoginForm));