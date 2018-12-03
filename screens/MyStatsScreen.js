import React from 'react';
import { Text, Button, View, StyleSheet, StatusBar } from 'react-native';


export default class MyStatsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>My Stats</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  }
});