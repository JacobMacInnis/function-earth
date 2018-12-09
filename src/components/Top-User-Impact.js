import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TopUserIMpact extends React.Component {
  
  render() {
    let myStats = <View style={{height: 155}}>
                  <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>{this.props.fiveUser}:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.five}</Text>
                </View>
                  <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>{this.props.fourUser}:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.four}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>{this.props.threeUser}:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.three}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>{this.props.twoUser}:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.two}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>{this.props.oneUser}:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.one}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', borderWidth: 1, borderRadius: 10, height: 15, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 20, fontWeight: 'bold'}}>Total:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 'bold'}}>{(this.props.five + this.props.four + this.props.three + this.props.two + this.props.one)}</Text>
                </View>
              </View>
    return (
      <View style={{borderWidth: 1, borderRadius: 10, padding: 10, width: 250}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>{this.props.title}</Text>
        {myStats}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textLeft: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'flex-start'
  },
  textRight: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'flex-start'
  },
});