import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

let types = [{ title: "EARTH", action: 'earth', color: 'green'}, { title: "OCEAN", action: 'ocean', color: 'blue'}, { title: "ANIMAL", action: 'animal', color: 'orange'}, {title: 'HUMANITY', action: 'humanity', color: '#ff0066'}];
class MyStatsButtons extends Component {
  onPress = string => {
    this.props.buttonPress(string);
  }
  render() {
    let buttons = types.map((button, index) => {
      let action = button.action;
      return (
        <TouchableOpacity
          key={index}
          style={{backgroundColor: button.color, width: 90, height: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}
          onPress={() => this.onPress(action)}>
          <Text style={{color: 'white', fontWeight: '700'}}>{button.title}</Text>
        </TouchableOpacity>
      );
    });
    return (
      <View style={{flexDirection: 'row', marginRight: 5}}>
        {buttons}
      </View>
    );
  }
}

export default MyStatsButtons;
