import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
export default class OceanImpact extends React.Component {
  
  render() {
    let myStats = <View style={styles.statsContainer}>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Artic:</Text> 
        <Text style={styles.textRight}>{this.props.artic}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Atlantic:</Text> 
        <Text style={styles.textRight}>{this.props.atlantic}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Indian:</Text> 
        <Text style={styles.textRight}>{this.props.indian}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Pacific:</Text> 
        <Text style={styles.textRight}>{this.props.pacific}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Southern:</Text> 
        <Text style={styles.textRight}>{this.props.southern}</Text>
      </View>
      <View style={styles.lineContainerLast}>
        <Text style={styles.textLeftLast}>Total {this.props.title}:</Text> 
        <Text style={styles.textRightLast}>{this.props.points}</Text>
      </View>
    </View>
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Ocean {this.props.title}</Text>
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
  statsContainer: {
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
    fontSize: RF(3),
  },
  textRight: {
    flex: 1,
    fontSize: RF(3),
    textAlign: 'right'
  },
  textLeftLast: {
    flex: 2, 
    fontSize: RF(3.2), 
    fontWeight: 'bold'
  },
  textRightLast: {
    flex: 1, 
    textAlign: 'right', 
    fontSize: RF(3.2), 
    fontWeight: 'bold'
  }
});