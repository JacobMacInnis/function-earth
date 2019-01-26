import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Entries from './Entries';
const colors = {
  earth: 'green',
  ocean: 'blue',
  animal: 'orange',
  humanity: '#ff0066'
};
class GlobalRecent extends Component {
  render() {
    const recentEntries = this.props.globalStats;
    console.log(this.props.globalStats);
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

export default GlobalRecent;