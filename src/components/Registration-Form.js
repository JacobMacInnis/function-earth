import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Field, reduxForm, focus } from 'redux-form';
import { authInput, authLabel, authButton, authButtonText } from './styles/authStyles';
import Input from './Input';

// Import Validation functions
import { required, nonEmpty, matches, length, isTrimmed, email, username } from './../validators';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	render() {
		return (
			<View>
				<View>
					<View>
						<Field
							props={styles.inputs}
							textTitle={'Email'}
							labelStyle={authLabel}
							component={Input} 
							name="email" 
							placeholder={'email'}
							validate={[required, email]}
							style={authInput}
						/>
					</View>
				</View>
				<View> 
					<View>
						<Field
							props={styles.inputs}
							textTitle={'Username'}
							labelStyle={authLabel}
							component={Input}
							name="username"
							validate={[required, nonEmpty, isTrimmed, username]}
							placeholder={'username'}
							style={authInput}	
						/>
					</View >
				</View>
				<View>
					
					<View>
						<Field
							props={styles.inputs}
							textTitle={'Password'}
							labelStyle={authLabel}
							component={Input}
							name="password"
							validate={[required, passwordLength, isTrimmed]}
							placeholder={'password'}
							secureTextEntry={true}
							style={authInput}	
						/>
					</View>
				</View>
				<View>
					<View>
						<Field
							props={styles.inputs}
							textTitle={'Confirm Password'}
							labelStyle={authLabel}
							component={Input}
							name="passwordConfirm"
							validate={[required, nonEmpty, matchesPassword]}
							placeholder={'password'}
							secureTextEntry={true}
							style={authInput}	
						/>
					</View>
				</View>
				<View style={{alignItems: 'center'}}>
				<TouchableOpacity
						style={[authButton, {backgroundColor: '#1C7C3C'}]} 
						title="login" 
						onPress={this.props.handleSubmit} 
					>
						<Text style={authButtonText}>Register</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    titles: {
				color: '#161511',
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 15
    },
    inputs:{
        alignSelf: 'center', 
        textAlign: 'center',
        borderWidth: 1, 
        borderRadius: 10, 
        height: hp('5%'), 
        width: wp('60%'), 
        fontSize: 16
    }
});

export default reduxForm({
    form: 'registration',
    
})(RegistrationForm);