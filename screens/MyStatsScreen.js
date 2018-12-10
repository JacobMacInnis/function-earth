import React from 'react';
import { Text, Button, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MyStats from '../src/components/My-Impact';
import Entries from '../src/components/Entries';
import MyStatsButtons from '../src/components/My-Stats-Buttons';

let colors = {
  earth: 'green',
  ocean: 'blue',
  animal: 'orange',
  humanity: '#ff0066'
};
class MyStatsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'earth'
    }
  }
  buttonPress = string => {
    this.setState({
      type: string
    });
  };
  render() {
    let recentEntries = this.props.stats.recentEntries;
    let recent = recentEntries.map((entry, index) => {
      return (<Entries key={index} type={entry.type} entry={entry.entry} country={entry.country} stateRegion={entry.stateRegion} color={colors[entry.type]} timeStamp={entry.timeStamp}></Entries>);
    });
    let entries = this.props.stats[`${this.state.type}Entries`];
    let selected = entries.map((entry, index) => {
      return (<Entries key={index} type={this.state.type} entry={entry.entry} country={entry.country} stateRegion={entry.stateRegion} color={colors[this.state.type]} timeStamp={entry.timeStamp}></Entries>);
    })
    console.log(this.props.stats)
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>My Stats</Text>
        <MyStats />
        <View style={{borderTopWidth: 1, borderBottomWidth: 1, marginTop: 10}}>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Recent Entries</Text>
          <View 
            style={{ height: 200, alignSelf: "stretch"}}>
            <View style={{height: 180, marginTop: 10}}>
              <ScrollView
                scrollEventThrottle={16}
                horizontal="true"
                showsHorizontalScrollIndicator="false">
                {recent}
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <MyStatsButtons buttonPress={string => this.buttonPress(string)}/>
        </View>
        <View 
            style={{ height: 200, alignSelf: "stretch"}}>
            <View style={{height: 180, marginTop: 10}}>
              <ScrollView
                scrollEventThrottle={16}
                horizontal="true"
                showsHorizontalScrollIndicator="false">
                {selected}
              </ScrollView>
            </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  return{
    stats: state.stats.stats,
    loading: state.stats.loading,
    error: state.stats.error
  }
};

export default connect(mapStateToProps)(MyStatsScreen);