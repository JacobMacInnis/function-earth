import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { globalStats } from '../src/actions/globalStats';
import GlobalScroll from '../src/components/GlobalScroll';
import GlobalRecent from '../src/components/GlobalRecent';

class GlobalStatsScreen extends React.Component {
  componentWillMount() {
    this.props.dispatch(globalStats());
  }
  render() {
    if (this.props.loading == false && this.props.globalStats !== null) {
      return (
        <View style={styles.container}>
          <View style={{flex: 7, borderBottomWidth: 1}}>
            <Text style={{fontSize: 40, alignSelf: 'center', marginTop: 5}}>Global Stats</Text>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <GlobalScroll globalStats={this.props.globalStats}/>
            </View>
          </View>
          <View style={{flex: 9}}>
            <ScrollView>
              <Text style={styles.titles}>Recent Entries</Text>
              <GlobalRecent globalStats={this.props.globalStats}/>
              <Text style={styles.titles}>Recent Earth</Text>
              <GlobalRecent globalStats={this.props.globalStats}/>
              <Text style={styles.titles}>Recent </Text>
              <GlobalRecent globalStats={this.props.globalStats}/>
              <Text style={styles.titles}>Recent Earth</Text>
              <GlobalRecent globalStats={this.props.globalStats}/>
              <Text style={styles.titles}>Recent Earth</Text>
              <GlobalRecent globalStats={this.props.globalStats}/>
            </ScrollView>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Image source={require('../assets/images/function-earth-splash.png')} 
            style={{alignSelf: 'center'}} />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titles: {
    fontSize: 30, 
    alignSelf:'center', 
    marginBottom: 8,
    marginTop: 8
  }
});

const mapStateToProps = state => {
  return{
    globalStats: state.globalStats.globalStats,
    loading: state.globalStats.loading,
    error: state.globalStats.error
  }
};

export default connect(mapStateToProps)(GlobalStatsScreen);