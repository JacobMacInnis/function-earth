import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { globalStats } from '../src/actions/globalStats';
import GlobalScroll from '../src/components/GlobalScroll';
import GlobalRecent from '../src/components/GlobalRecent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";

class GlobalStatsScreen extends React.Component {
  componentWillMount() {
    this.props.dispatch(globalStats());
  }
  render() {
    if (this.props.loading == false && this.props.globalStats !== null) {
      let recent = this.props.globalStats.recentEntries;
      let earth = this.props.globalStats.earthRecentEntries;
      let ocean = this.props.globalStats.oceanRecentEntries;
      let animal = this.props.globalStats.animalRecentEntries;
      let humanity = this.props.globalStats.humanityRecentEntries;
      
      return (
        <View style={styles.container}>
          <View style={{flex: 8, borderBottomWidth: 1}}>
            <Text style={{fontSize: RF(5), fontWeight: 'bold', alignSelf: 'center', marginTop: 5}}>Global Stats</Text>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <GlobalScroll globalStats={this.props.globalStats}/>
            </View>
          </View>
          <View style={{flex: 9}}>
            <ScrollView>
              <Text style={styles.titles}>Recent Entries</Text>
              <GlobalRecent globalStats={recent}/>
              <Text style={styles.titles}>Recent Earth</Text>
              <GlobalRecent globalStats={earth}/>
              <Text style={styles.titles}>Recent Ocean</Text>
              <GlobalRecent globalStats={ocean}/>
              <Text style={styles.titles}>Recent Animals</Text>
              <GlobalRecent globalStats={animal}/>
              <Text style={styles.titles}>Recent Humanity</Text>
              <GlobalRecent globalStats={humanity}/>
              <View style={styles.afterTitles}></View>
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
    fontSize: RF(4), 
    fontWeight: 'bold',
    alignSelf:'center', 
    marginBottom: 8,
    marginTop: 8
  },
  afterTitles: {
    height: 20
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