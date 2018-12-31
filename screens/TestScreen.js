import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class TestScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.responsiveBox}>
          <Text style={styles.text}>
            This box is always 84.5% width and 17% height.</Text>
          <Text style={styles.text}>Test it by running this example repo in phones/emulators with screens of various dimensions and pixel per inch (ppi).</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  responsiveBox: {
    width: wp('84.5%'),
    height: hp('17%'),
    borderWidth: 2,
    borderColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-around' 
  },
  text: {
    color: 'white'
  }
});

export default TestScreen;
