import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { impact } from './styles/impact';

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
const styles = StyleSheet.create(impact);