import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RF from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class TopUserIMpact extends React.Component {
  
  render() {
    let myStats = <View style={styles.myStatsContainer}>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>{this.props.fiveUser}:</Text> 
        <Text style={styles.textRight}>{this.props.five}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>{this.props.fourUser}:</Text> 
        <Text style={styles.textRight}>{this.props.four}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>{this.props.threeUser}:</Text> 
          <Text style={styles.textRight}>{this.props.three}</Text>
                </View>
                <View style={styles.lineContainer}>
                  <Text style={styles.textLeft}>{this.props.twoUser}:</Text> 
                  <Text style={styles.textRight}>{this.props.two}</Text>
                </View>
                <View style={styles.lineContainer}>
                  <Text style={styles.textLeft}>{this.props.oneUser}:</Text> 
                  <Text style={styles.textRight}>{this.props.one}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', borderWidth: 1, borderRadius: 10, height: 15, padding: 5}}>
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
  myStatsContainer: {
    height: hp('26%')
  },
  textLeft: {
    flex: 2,
    fontSize: RF(3),
    alignSelf: 'flex-start'
  },
  textRight: {
    flex: 1,
    fontSize: RF(3),
    textAlign: 'right'
  },
});