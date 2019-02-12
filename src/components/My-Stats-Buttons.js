import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { types } from './helpers/types';
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
          style={{backgroundColor: (this.props.pressed === button.action ? button.pressed : button.color), width: wp('22%'), height: hp('5%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 4,}, shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,}}
          onPress={() => this.onPress(action)}>
          <Text style={{ fontSize: RF(2), color: '#F9F9F0', fontWeight: '700'}}>{button.title}</Text>
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
