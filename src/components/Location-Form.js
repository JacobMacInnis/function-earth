import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Field, reduxForm, focus } from 'redux-form';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { authLabel, authInput, inputLightText } from './styles/authStyles';

// Import Components
import Input from './Input';

// Import Validation functions
import { required, nonEmpty, length, isTrimmed } from '../validators';
import { lightText } from './helpers/textColors';
const usLocations = ['us', 'usa', 'united states'];
export class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'Country'
        }
    }
    render() {
        let usCity = <View>
        <View>
            <Field
                props={styles.inputs} 
                textTitle={'City'}
                component={Input} 
                name="city" 
                placeholder={'City'}
                style={authInput}
                labelStyle={authLabel}
				placeholderStyle={inputLightText}
                />
        </View>
    </View>
      return (
        <View>
            <View>
                <View>
                    <Field
                        props={styles.inputs}
                        textTitle={'Country'}
                        component={Input}
                        name="country"
                        validate={[required, isTrimmed]}
                        placeholder={'Country'}
                        onChange={country => this.setState({country: country})}
                        style={authInput}
                        labelStyle={authLabel}
				        placeholderStyle={inputLightText}
                    />
                </View>
            </View>
            <View> 
                <View>
                    <Field
                        props={styles.inputs}
                        textTitle={'State/Region'}
                        component={Input}
                        name="stateRegion"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder={'State/Region'}
                        style={authInput}
                        labelStyle={authLabel}
				        placeholderStyle={inputLightText}
                    />
                </View >
            </View>
            {usLocations.indexOf(this.state.country.toLowerCase()) !== -1 && usCity}
            <View style={{alignItems: 'center'}}>
				<TouchableOpacity
                    style={{borderWidth: 1, borderRadius: 10, borderColor: 'white', height: hp('5%'), width: wp('60%'), margin: 10, justifyContent: 'center',  shadowColor: 'white', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: 'green'}} 
                    title="Set Location" 
                    onPress={this.props.handleSubmit}>
					<Text style={{fontSize: 25, alignSelf: 'center', fontWeight: 'bold', color: lightText}}>Set Location</Text>
				</TouchableOpacity>
			</View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
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
    form: 'location',
})(LocationForm);