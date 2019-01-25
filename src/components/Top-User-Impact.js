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
                <View style={styles.lineContainerLast}>
                  <Text style={styles.textLeftLast}>Total:</Text> 
                  <Text style={styles.textRightLast}>{(this.props.five + this.props.four + this.props.three + this.props.two + this.props.one)}</Text>
                </View>
              </View>
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.title}</Text>
        {myStats}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1, 
    borderRadius: 10, 
    padding: 10, 
    width: wp('70%')
  },
  header: {
    fontSize: RF(4), 
    fontWeight: 'bold', 
    alignSelf: 'center'
  },
  myStatsContainer: {
    height: hp('26%')
  },
  lineContainer: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row', 
    height: 10, 
    padding: 2
  },
  lineContainerLast: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row', 
    height: 15, 
    padding: 2
  },
  textLeft: {
    flex: 2,
    fontSize: RF(2.7),
    alignSelf: 'flex-start'
  },
  textRight: {
    flex: 1,
    fontSize: RF(2.7),
    textAlign: 'right'
  },
  textLeftLast: {
    flex: 2, 
    fontSize: RF(2.8), 
    fontWeight: 'bold'
  },
  textRightLast: {
    flex: 1, 
    textAlign: 'right', 
    fontSize: RF(2.8), 
    fontWeight: 'bold'
  }
});