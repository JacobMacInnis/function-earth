import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { userLocation }  from '../src/actions/users';
import LocationForm from './../src/components/Location-Form';

class UserCreation extends React.Component {
  static navigationOptions = {
    title: 'Creating Function Earth Account',
  };
  createUserStats(values) {
    this.props.dispatch(userLocation(values))
      .then(() => {
        if (this.props.loggedIn && this.props.locationCreated) {
          this.props.navigation.navigate('App')
        }
      })  
  } 
  render() {
    console.log(this.props.locationError)
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
      <View style={styles.locationContainer}>
        <View style={styles.locationContainer}>
          <Image source={require('./../src/assets/images/function-earth-logo.png')} 
            style={{width: 150, height: 150}} />
          {/* <Text style={styles.loginTitle}>Function Earth</Text> */}
        </View>
        <Text style={styles.locationText}>{Location}</Text>
        <View style={styles.locationForm}>
          <LocationForm
            onSubmit={(values) => this.createUserStats(values)}/>
        </View>
      </View>
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
    backgroundColor: 'white'
  },
  locationContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationText: {
    justifyContent: 'flex-end',
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
  },
  locationForm: {
    flex: 8,
  }
});

export default connect(mapStateToProps)(UserCreation);