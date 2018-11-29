import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Field, reduxForm, focus } from 'redux-form';

// Import Components
import Input from './Input';

// Import Validation functions
import { required, nonEmpty, length, isTrimmed } from '../validators';

export class LocationForm extends React.Component {
    render() {
      return (
        <View>
            <View>
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
            <View> 
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>State</Text>
                </View>
                <View>
                    <Field
                        component={Input}
                        name="state"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder={'State/Region'}
                    />
                </View >
            </View>
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
                    />
                </View>
            </View>
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