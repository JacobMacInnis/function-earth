import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { impact } from './styles/impact';
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
const styles = StyleSheet.create(impact);