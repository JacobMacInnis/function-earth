import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { lightText } from './helpers/textColors';

const type = {
  earth: 'Earth Entry',
  ocean: 'Ocean Entry',
  animal: 'Animal Entry',
  humanity: 'Humanity Entry'
};
const secondColor = {
  earth: '#599F71',
  ocean: '#36307B',
  animal: '#787262',
  humanity: '#DB8354'
};

class Entries extends Component {

  render() {
    let oceanCapitalized;
    if (this.props.type === 'ocean') {
      oceanCapitalized = this.props.ocean.charAt(0).toUpperCase() + this.props.ocean.slice(1);
    }
    let header1;
    let header2;
    let header3;
    if (this.props.statsType === 'myStats') {
      header1 = (this.props.type === 'ocean' ? oceanCapitalized : `${this.props.stateRegion}, ${this.props.country}`);
      header2 = this.props.timeStamp;
      header3 = type[this.props.type];
    } else if (this.props.statsType === 'globalStats') {
      header1 = this.props.username;
      header2 = (this.props.type === 'ocean' ? oceanCapitalized : `${this.props.stateRegion}, ${this.props.country}`);
      header3 = this.props.timeStamp;
    }
    return (
      <View style={[styles.entriesContainer, { marginLeft: (this.props.index === 0 ? wp('7%') : wp('4%')) }]}>
        <View style={[styles.entriesInnerContainer, { backgroundColor: this.props.color }]}>
          <View style={styles.entriesInnerContainerFlex}>
            <Text style={styles.entriesHeader1}>{header1}</Text>
            <Text style={styles.entriesHeader2}>{header2}</Text>
            {/* <Text style={styles.entriesType}>{type[this.props.type]}</Text> */}
            <Text style={styles.entriesHeader3}>{header3}</Text>
          </View>
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
    borderWidth: 1.5, 
    borderRadius: 6, 
    borderColor: '#a3a3a3', 
    // overflow: 'hidden', 
    marginRight: wp('2%'),
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  entriesInnerContainer: {
    flex: 5, 
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#F3F3E1',
  },
  entriesInnerContainerFlex: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  entriesContentContainer: {
    flex: 6, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  entriesHeader1: {
    flex: 1,
    fontSize: RF(3.1),
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 3,
    color: lightText
  },
  entriesHeader2: {
    flex: 1,
    fontSize: RF(2.5), 
    fontWeight: '700',
    color: lightText,
    textAlign: 'center',
  },
  // entriesType: {
  //   flex: 1,
  //   textAlign: 'center',
  //   fontSize: RF(2), 
  //   fontWeight: '400',
  //   color: lightText,
  // },
  entriesHeader3: {
    fontSize: RF(2.1), 
    color: lightText,
    marginBottom: 3,
    textAlign: 'center',
  },
  entriesContent: {
    fontSize: RF(3), 
    padding: wp('2%'),
    textAlign: 'center',
    color: lightText
  }
});

export default Entries;
