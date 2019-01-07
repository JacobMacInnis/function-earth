import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { Field, reduxForm, focus } from 'redux-form';

import Input from './Input';

// Import Validation functions
import { required, nonEmpty, matches, length, isTrimmed } from './../validators';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	render() {
		return (
			<View>
				<View>
					{/* <View>
						<Text style={styles.titles}>First Name</Text>
					</View> */}
					<View>
						<Field
							props={styles.inputs}
							textTitle={'First Name'}
							component={Input} 
							name="firstName" 
							placeholder={'Name'}
						/>
					</View>
				</View>
				<View> 
					{/* <View>
						<Text style={styles.titles}>Username</Text>
					</View> */}
					<View>
						<Field
							props={styles.inputs}
							textTitle={'Username'}
							component={Input}
							name="username"
							validate={[required, nonEmpty, isTrimmed]}
							placeholder={'username'}
						/>
					</View >
				</View>
				<View>
					{/* <View>
						<Text style={styles.titles}>Password</Text>
					</View> */}
					<View>
						<Field
							props={styles.inputs}
							textTitle={'Password'}
							component={Input}
							name="password"
							validate={[required, passwordLength, isTrimmed]}
							placeholder={'password'}
							secureTextEntry={true}
						/>
					</View>
				</View>
				<View>
					{/* <View>
						<Text style={styles.titles}>Confirm Password</Text>
					</View> */}
					<View>
						<Field
							props={styles.inputs}
							textTitle={'Confirm Password'}
							component={Input}
							name="passwordConfirm"
							validate={[required, nonEmpty, matchesPassword]}
							placeholder={'password'}
							secureTextEntry={true}
						/>
					</View>
				</View>
				<View style={{alignItems: 'center'}}>
					<TouchableOpacity
						style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: hp('5%'), width: wp('60%'), margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: 'green'}} 
						title="login" 
						onPress={this.props.handleSubmit} 
					>
						<Text style={{fontSize: 25, alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>Register</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    titles: {
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