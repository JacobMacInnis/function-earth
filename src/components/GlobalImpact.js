import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
export default class GlobalImpact extends React.Component {
  
  render() {
    let myStats = 
    <View style={styles.myStatsContainer}>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Earth:</Text> 
        <Text style={styles.textRight}>{this.props.earth}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Ocean:</Text> 
        <Text style={styles.textRight}>{this.props.ocean}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Animal:</Text> 
        <Text style={styles.textRight}>{this.props.animal}</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.textLeft}>Humanity:</Text> 
        <Text style={styles.textRight}>{this.props.humanity}</Text>
      </View>
      <View style={styles.lineContainerLast}>
        <Text style={styles.textLeftLast}>Total {this.props.title}:</Text> 
        <Text style={styles.textRightLast}>{this.props.all}</Text>
      </View>
    </View>
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Global {this.props.title}</Text>
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
    fontSize: RF(3)
  },
  textRight: {
    flex: 1, 
    textAlign: 'right', 
    fontSize: RF(3)
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
