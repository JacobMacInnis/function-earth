import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

let types = [{ title: "EARTH", action: 'earth', color: 'green', pressed: '#b3ffb3'}, { title: "OCEAN", action: 'ocean', color: 'blue', pressed: '#ccccff'}, { title: "ANIMAL", action: 'animal', color: 'orange', pressed: '#ffe4b3'}, {title: 'HUMANITY', action: 'humanity', color: '#ff0066', pressed: '#ffcce0'}];
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
          style={{backgroundColor: (this.props.pressed === button.action ? button.pressed : button.color), width: 90, height: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 5}}
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
