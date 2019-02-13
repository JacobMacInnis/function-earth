import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RF from "react-native-responsive-fontsize";
// Import Components
import LocationForm from './../src/components/Location-Form';
import { DismissKeyboard } from '../src/components/DismissKeyboard';
import KeyboardShift from '../src/components/KeyboardShift';
// Import Actions
import { userLocation }  from '../src/actions/users';
import { darkText, lightText } from '../src/components/helpers/textColors';

class UserCreation extends React.Component {
  static navigationOptions = { header: null }

  createUserStats(values) {
    this.props.dispatch(userLocation(values))
      .then(() => {
        if (this.props.loggedIn && this.props.locationCreated) {
          this.props.navigation.navigate('App')
        }
      }) 
      .catch(err => {
        console.log(err);
      }) 
  } 
  render() {
    let Location = <Text style={styles.locationText}>Set Your Location</Text>;
    if (this.props.locationLoading) {
      Location = <Text style={styles.locationText}>Loading</Text>
    } else if (this.props.locationError) {
      Location = <Text style={{
        justifyContent: 'flex-end',
        textAlign: 'center',
        fontSize: 25,
        margin: 10,
        color: 'red'
      }}>{this.props.locationError.message}</Text>
    }
    return (
      <KeyboardShift>
        {() => (
        <DismissKeyboard>
          <View style={styles.locationContainer}>
            <View>
              <Image source={require('./../src/assets/images/function-earth-logo2.png')} 
                style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}} 
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.locationText}>Function Earth</Text>
            </View>
            <Text style={styles.locationText}>{Location}</Text>
            <View style={styles.locationForm}>
              <LocationForm
                onSubmit={(values) => this.createUserStats(values)}/>
            </View>
          </View>
        </DismissKeyboard>
        )}
      </KeyboardShift>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  locationLoading: state.location.loading,
  locationError: state.location.error,
  locationCreated: state.location.locationCreated
});

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: darkText,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  locationText: {
    color: lightText,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    textAlign: 'center',
    fontSize: RF(4),
    margin: 10,
  },
  locationForm: {
    flex: 8,
  }
});

export default connect(mapStateToProps)(UserCreation);