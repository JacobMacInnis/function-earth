import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {types} from './helpers/types';
class MyStatsButtons extends Component {
  onPress = string => {
    this.props.buttonPress(string);
  }
  render() {
    const buttons = types.map((button, index) => {
    const action = button.action;
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
