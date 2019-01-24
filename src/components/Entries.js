import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
let type = {
  earth: 'Earth Entry',
  ocean: 'Ocean Entry',
  animal: 'Animal Entry',
  humanity: 'Humanity Entry'
};
let secondColor = {
  earth: '#ccffcc',
  ocean: '#e6e6ff',
  animal: '#ffedcc',
  humanity: '#ffe6f0'
};
class Entries extends Component {

  render() {
    return (
      <View style={{height: hp('35%'), width: wp('85%'), marginLeft: (this.props.index === 0 ? wp('7%') : wp('4%')), borderWidth: 1, borderRadius: 6, borderColor: '#34495e', overflow: 'hidden'}}>
        <View style={{flex: 2, backgroundColor: this.props.color, alignItems: 'center'}}>
          <Text style={{fontSize: RF(3.5), fontWeight: '700', color: 'white', marginTop: 5}}>{type[this.props.type]}</Text>
          <Text style={{fontSize: RF(2.8), color: 'white'}}>{this.props.timeStamp}</Text>
          <Text style={{fontSize: RF(2.8), fontWeight: '400', color: 'white'}}>{this.props.stateRegion}:{this.props.country}</Text>
        </View>
        <View style={{flex: 3, backgroundColor: secondColor[this.props.type], alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: RF(3.1), padding: 8}}>{this.props.entry}</Text>
        </View>
      </View>
    );
  }
}

export default Entries;
