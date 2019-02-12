import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Entries from './Entries';
const colors = {
  earth: '#1C7C3C',
  ocean: '#1C1660',
  animal: '#5B5340',
  humanity: '#C56D3D'
};

class GlobalRecent extends Component {
  render() {
    const recentEntries = this.props.globalStats;
    const recent = recentEntries.map((entry, index) => {
      return ( <Entries key={index} index={index} type={entry.type} entry={entry.entry} color={colors[entry.type]} timeStamp={entry.timeStamp} country={entry.country} stateRegion={entry.stateRegion} ocean={entry.ocean ? entry.ocean : ''}/>);      
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