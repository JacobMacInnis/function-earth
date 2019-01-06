import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';

// Import Custsom Input Form
import Input from './Input';
// Import Validation functions
import { required, nonEmpty } from './../validators';

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
        <View title="form-error" aria-live="polite">
          <Text style={{color:'red'}}>{this.props.loginError.message}</Text>
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
            style={{ width: 200, borderWidth: 1, borderRadius: 10, height: 50, fontSize: 16}}
            textAlign={'center'}
            onChangeText={username => this.setState({username})}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{ fontSize: 18}}>Password</Text>
          <TextInput
            value={this.state.password}
            style={{ width: 200, borderWidth: 1, borderRadius: 10, height: 50, fontSize: 16}}
            textAlign={'center'}
            onChangeText={password => this.setState({password})}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: 60, width: 200, margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: 'green'}} 
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
const mapStateToProps = state => ({
  loginError: state.auth.error
});
export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(connect(mapStateToProps)(LoginForm));