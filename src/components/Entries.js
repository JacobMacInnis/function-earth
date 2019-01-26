import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";

const type = {
  earth: 'Earth Entry',
  ocean: 'Ocean Entry',
  animal: 'Animal Entry',
  humanity: 'Humanity Entry'
};
const secondColor = {
  earth: '#ccffcc',
  ocean: '#e6e6ff',
  animal: '#ffedcc',
  humanity: '#ffe6f0'
};
class Entries extends Component {

  render() {
    let oceanCapitalized;
    if (this.props.type === 'ocean') {
      oceanCapitalized = this.props.ocean.charAt(0).toUpperCase() + this.props.ocean.slice(1);
    }
    return (
      <View style={[styles.entriesContainer, { marginLeft: (this.props.index === 0 ? wp('7%') : wp('4%')) }]}>
        <View style={[styles.entriesInnerContainer, { backgroundColor: this.props.color }]}>
          <Text style={styles.entriesLocation}>{this.props.type === 'ocean' ? oceanCapitalized : `${this.props.stateRegion}:${this.props.country}`}</Text>
          <Text style={styles.entriesType}>{type[this.props.type]}</Text>
          <Text style={styles.entriesTimeStamp}>{this.props.timeStamp}</Text>
        </View>
        <View style={[styles.entriesContentContainer, { backgroundColor: secondColor[this.props.type] }]}>
          <Text style={styles.entriesContent}>{this.props.entry}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  entriesContainer: {
    height: hp('26%'), 
    width: wp('85%'), 
    borderWidth: 1, 
    borderRadius: 6, 
    borderColor: '#34495e', 
    overflow: 'hidden', 
    marginRight: wp('2%')
  },
  entriesInnerContainer: {
    flex: 5, 
    alignItems: 'center'
  },
  entriesContentContainer: {
    flex: 6, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  entriesLocation: {
    fontSize: RF(2.9), 
    fontWeight: '700', 
    color: 'white', 
    marginTop: 5
  },
  entriesType: {
    fontSize: RF(2.1), 
    fontWeight: '400', 
    color: 'white'
  },
  entriesTimeStamp: {
    fontSize: RF(2.1), 
    color: 'white'
  },
  entriesContent: {
    fontSize: RF(3), 
    padding: wp('2%'),
    textAlign: 'center'
  }
});

export default Entries;
