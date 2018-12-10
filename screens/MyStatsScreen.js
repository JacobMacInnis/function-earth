import React from 'react';
import { Text, Button, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MyStats from '../src/components/My-Impact';
class MyStatsScreen extends React.Component {

  render() {
    let recentEntries = this.props.stats.recentEntries;
    // console.log(Array.isArray(recentEntries));
    let recent = recentEntries.map((entry, index) => {
      return (<Text key={index}>{entry.entry}</Text>);
    });
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>My Stats</Text>
        <MyStats />
        <ScrollView 
          scrollEventThrottle={16}
          style={{borderWidth: 1, height: 200, alignSelf: "stretch"}}>
          <View style={{height: 160, marginTop: 40}}>
            <ScrollView
              horizontal="true"
              showsHorizontalScrollIndicator="false">
              <View style={{height: 160, width: 200}}>
                <View style={{flex: 1, backgroundColor: 'green'}}>

                </View>
                <View style={{flex: 2}}>
                  
                </View>
              </View>
            </ScrollView>
          </View>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Recent Entries</Text>
          <View>{recent}</View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10
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