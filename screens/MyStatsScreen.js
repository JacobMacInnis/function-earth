import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
// Import Components
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
    // console.log(recentEntries);
    let recent = recentEntries.map((entry, index) => {
      return (<Entries key={index} index={index} type={entry.type} entry={entry.entry} country={entry.country} stateRegion={entry.stateRegion} color={colors[entry.type]} timeStamp={entry.timeStamp}></Entries>);
    });
    let entries = this.props.stats[`${this.state.type}Entries`];
    let selected = entries.map((entry, index) => {
      return (<Entries key={index} index={index} type={this.state.type} entry={entry.entry} country={entry.country} stateRegion={entry.stateRegion} color={colors[this.state.type]} timeStamp={entry.timeStamp}></Entries>);
    });
    return (
      <ScrollView 
        contentContainerStyle={{alignItems: 'center'}}
        scrollEventThrottle={16}
        horizontal={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={{fontSize: RF(5)}}>My Stats</Text>
        <MyStats />
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: RF(4), alignSelf: 'center'}}>Recent Entries</Text>
          <View 
            style={{ height: hp('30%'), alignSelf: "stretch"}}>
            <View style={{height: hp('28%'), marginTop: 10}}>
              <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {recent}
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <MyStatsButtons pressed={this.state.type} buttonPress={string => this.buttonPress(string)}/>
        </View>
        <View 
            style={{ height: hp('30%'), alignSelf: "stretch"}}>
            <View style={{height: hp('28%'), marginTop: 10}}>
              <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {selected}
              </ScrollView>
            </View>
          </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
});

const mapStateToProps = state => {
  return{
    stats: state.stats.stats,
    loading: state.stats.loading,
    error: state.stats.error
  }
};

export default connect(mapStateToProps)(MyStatsScreen);