import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import requiresLogin from './requires-login';
import { getStats }  from '../actions/stats';

class MyImpact extends React.Component {
  componentDidMount() {
    this.props.dispatch(getStats());
  }
  render() {
    let myStats = <Text>Loading</Text>;
    if (this.props.statsLoading === false && this.props.statsError === null && this.props.stats !== {}) {
      let stats = this.props.stats;
      myStats = <View style={{height: hp('20%'), width: wp('55%')}}>
                  <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2}}>
                  <Text style={{flex: 2, fontSize: RF(2.5)}}>Earth:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.earthPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2}}>
                  <Text style={{flex: 2, fontSize: RF(2.5)}}>Ocean:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.oceanPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2}}>
                  <Text style={{flex: 2, fontSize: RF(2.5)}}>Animal:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.animalPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2}}>
                  <Text style={{flex: 2, fontSize: RF(2.5)}}>Humanity:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.humanityPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row',  height: hp('3%'), }}>
                {/* paddingLeft: 10, paddingRight: 10, paddingBottom: 5, borderWidth: 1, borderRadius: 10, */}
                  <Text style={{flex: 2, fontSize: RF(2.8), fontWeight: 'bold'}}>Total Impact:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 'bold'}}>{stats.totalPoints}</Text>
                </View>
              </View>
    }
    return (
      <View style={{backgroundColor: 'white',borderWidth: 1, borderRadius: 10, padding: 10, width: wp('60%'), marginTop: 5}}>
        <Text style={{fontSize: RF(3), fontWeight: 'bold', alignSelf: 'center'}}>My Impact</Text>
        {myStats}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textLeft: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'flex-start'
  },
  textRight: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'flex-start'
  },
});

const mapStateToProps = state => ({
  stats: state.stats.stats,
  statsError: state.stats.error,
  statsLoading: state.stats.loading
});

export default requiresLogin()(connect(mapStateToProps)(MyImpact));