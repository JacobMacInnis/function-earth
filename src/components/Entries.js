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
    return (
      <View style={[styles.entriesContainer, { marginLeft: (this.props.index === 0 ? wp('7%') : wp('4%')) }]}>
        <View style={[styles.entriesInnerContainer, { backgroundColor: this.props.color }]}>
          <Text style={styles.entriesTitle}>{type[this.props.type]}</Text>
          <Text style={styles.entriesTimeStamp}>{this.props.timeStamp}</Text>
          <Text style={styles.entriesLocation}>{this.props.stateRegion}:{this.props.country}</Text>
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
    flex: 2, 
    alignItems: 'center'
  },
  entriesTitle: {
    fontSize: RF(2.9), 
    fontWeight: '700', 
    color: 'white', 
    marginTop: 5
  },
  entriesTimeStamp: {
    fontSize: RF(2.5), 
    color: 'white'
  },
  entriesLocation: {
    fontSize: RF(2.3), 
    fontWeight: '400', 
    color: 'white'
  },
  entriesContentContainer: {
    flex: 3, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  entriesContent: {
    fontSize: RF(3), 
    padding: wp('2%')
  }
});

export default Entries;
