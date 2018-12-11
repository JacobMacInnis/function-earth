import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Entries from './Entries';
const colors = {
  earth: 'green',
  ocean: 'blue',
  animal: 'orange',
  humanity: '#ff0066'
};
class GlobalRecent extends Component {

  render() {
    const recentEntries = this.props.globalStats.recentEntries;
    const recent = recentEntries.map((entry, index) => {
      return ( <Entries key={index} index={index} type={entry.type} entry={entry.entry} color={colors[entry.type]} timeStamp={entry.timeStamp} country={entry.country} stateRegion={entry.stateRegion} />);      
    });
    return (
      <ScrollView 
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}  
      >
      {recent}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});

export default GlobalRecent;