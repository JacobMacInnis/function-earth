import React from 'react';
import { View, Text, Button } from 'react-native';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';

// Import Custsom Input Form
import Input from './Input';
// Import Validation functions
import { required, nonEmpty } from './../validators';

export class LoginForm extends React.Component {
  render() {
    let error;
    if (this.props.loginError) {
      error = (
        <View title="form-error" aria-live="polite">
          <Text style={{color:'red'}}>{this.props.loginError.message}</Text>
        </View>
      );
    }
    return (
      <View title="login-form">
        {error}
        <Text htmlFor="username">Username</Text>
        <Field
          component={Input}
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <Text htmlFor="password">Password</Text>
        <Field
          component={Input}
          name="password"
          id="password"
          validate={[required, nonEmpty]}
          secureTextEntry={true}
        />
        <Button 
          title="login" 
          onPress={this.props.handleSubmit}>
            <Text>Log in</Text>
        </Button>
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