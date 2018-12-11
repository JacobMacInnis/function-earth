import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class GlobalImpact extends React.Component {
  
  render() {
    let myStats = 
    <View style={{height: 175}}>
      <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
        <Text style={{flex: 2, fontSize: 18}}>Earth:</Text> 
        <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.earth}</Text>
        </View>
      <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
        <Text style={{flex: 2, fontSize: 18}}>Ocean:</Text> 
        <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.ocean}</Text>
      </View>
      <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
        <Text style={{flex: 2, fontSize: 18}}>Animal:</Text> 
        <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.animal}</Text>
      </View>
      <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
        <Text style={{flex: 2, fontSize: 18}}>Humanity:</Text> 
        <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.humanity}</Text>
      </View>
      <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', borderWidth: 1, borderRadius: 10, height: 15, padding: 2}}>
        <Text style={{flex: 2, fontSize: 20, fontWeight: 'bold'}}>Total {this.props.title}:</Text> 
        <Text style={{flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 'bold'}}>{this.props.all}</Text>
      </View>
    </View>
    return (
      <View style={{borderWidth: 1, borderRadius: 10, padding: 10, width: 250}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>Global {this.props.title}</Text>
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
