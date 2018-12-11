import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class OceanImpact extends React.Component {
  
  render() {
    let myStats = <View style={{height: 175}}>
                  <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Artic:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.artic}</Text>
                </View>
                  <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Atlantic:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.atlantic}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Indian:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.indian}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Pacific:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.pacific}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Southern:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{this.props.southern}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', borderWidth: 1, borderRadius: 10, height: 15, padding: 2, paddingBottom: 5, paddingLeft: 5, paddingRight: 5}}>
                  <Text style={{flex: 2, fontSize: 20, fontWeight: 'bold'}}>Total {this.props.title}:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 'bold'}}>{this.props.points}</Text>
                </View>
              </View>
    return (
      <View style={{borderWidth: 1, borderRadius: 10, padding: 10, width: 250}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>Ocean {this.props.title}</Text>
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