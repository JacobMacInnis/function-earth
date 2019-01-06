import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }
  render() {
    let error;
    if (this.props.loginError) {
      error = (
        <View title="form-error" aria-live="polite" style={{alignItems: 'center'}}>
          <Text style={{color:'red', fontSize: RF(3)}}>{this.props.loginError.message}</Text>
        </View>
      );
    }
    let values = {username: this.state.username, password: this.state.password};
    return (
      <View title="login-form">
        {error}
        <View style={{ alignItems: 'center'}}>
          <Text style={{ fontSize: 18}}>Username</Text>
          <TextInput
            value={this.state.username}
            style={{ borderWidth: 1, borderRadius: 10, height: hp('5%'), width: wp('60%'), fontSize: 16}}
            textAlign={'center'}
            onChangeText={username => this.setState({username})}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{ fontSize: 18}}>Password</Text>
          <TextInput
            value={this.state.password}
            style={{ borderWidth: 1, borderRadius: 10, height: hp('5%'), width: wp('60%'), fontSize: 16}}
            textAlign={'center'}
            onChangeText={password => this.setState({password})}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: hp('5%'), width: wp('60%'), margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: 'green'}} 
            title="login" 
            onPress={() => this.props.onSubmit(values)} 
          >
            <Text style={{fontSize: 25, alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>Login</Text>
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