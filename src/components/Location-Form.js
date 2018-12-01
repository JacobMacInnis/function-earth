import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Field, reduxForm, focus } from 'redux-form';

// Import Components
import Input from './Input';

// Import Validation functions
import { required, nonEmpty, length, isTrimmed } from '../validators';
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
            <Text style={{ fontWeight: 'bold'}}>city</Text>
        </View>
        <View>
            <Field 
                component={Input} 
                name="city" 
                placeholder={'City'}
                />
        </View>
    </View>
      return (
        <View>
            <View>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Country</Text>
                </View>
                <View>
                    <Field
                        component={Input}
                        name="country"
                        validate={[required, isTrimmed]}
                        placeholder={'Country'}
                        onChange={country => this.setState({country: country})}
                    />
                </View>
            </View>
            <View> 
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>State/Region</Text>
                </View>
                <View>
                    <Field
                        component={Input}
                        name="stateRegion"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder={'State/Region'}
                    />
                </View >
            </View>
            {usLocations.indexOf(this.state.country.toLowerCase()) !== -1 && usCity}
          <Button
              title='Set Location'
              onPress={this.props.handleSubmit}
              >
              <Text>Set Location</Text>
          </Button>
        </View>
      );
    }
}

const styles = StyleSheet.create({
});

export default reduxForm({
    form: 'location',
})(LocationForm);