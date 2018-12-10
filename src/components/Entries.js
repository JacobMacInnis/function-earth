import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
      <View style={{height: 180, width: 250, marginLeft: 10, borderWidth: 1, borderColor: '#34495e', borderRadius: 6}}>
        <View style={{flex: 2, backgroundColor: this.props.color, alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'white', marginTop: 5}}>{type[this.props.type]}</Text>
          <Text style={{fontSize: 14, color: 'white'}}>{this.props.timeStamp}</Text>
          <Text style={{fontSize: 16, fontWeight: '400', color: 'white'}}>{this.props.stateRegion}:{this.props.country}</Text>
        </View>
        <View style={{flex: 3, backgroundColor: secondColor[this.props.type], alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 18, padding: 8}}>{this.props.entry}</Text>
        </View>
      </View>
    );
  }
}

export default Entries;
