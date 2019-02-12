import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import requiresLogin from './requires-login';
import { getStats }  from '../actions/stats';
import { lightText, darkText } from './helpers/textColors';

class MyImpact extends React.Component {
  componentDidMount() {
    this.props.dispatch(getStats());
  }
  render() {
    let myStats = <View style={{alignSelf: 'center'}}><Text style={{fontSize: RF(4)}}>Loading</Text></View>;
    if (this.props.statsLoading === false && this.props.statsError === null && this.props.stats !== {}) {
      let stats = this.props.stats;
      myStats = <View style={{height: hp('20%'), width: wp('55%')}}>
                  <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2,}}>
                  <Text style={{flex: 2, fontSize: RF(2.8), color: darkText}}>Earth:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: RF(2.8), color: darkText}}>{stats.earthPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2}}>
                  <Text style={{flex: 2, fontSize: RF(2.8), color: darkText}}>Ocean:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: RF(2.8), color: darkText}}>{stats.oceanPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2}}>
                  <Text style={{flex: 2, fontSize: RF(2.8), color: darkText}}>Animal:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: RF(2.8), color: darkText}}>{stats.animalPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: hp('2%'), padding: 2}}>
                  <Text style={{flex: 2, fontSize: RF(2.8), color: darkText}}>Humanity:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: RF(2.8), color: darkText}}>{stats.humanityPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row',  height: hp('3%'), }}>
                {/* paddingLeft: 10, paddingRight: 10, paddingBottom: 5, borderWidth: 1, borderRadius: 10, */}
                  <Text style={{flex: 2, fontSize: RF(2.8), fontWeight: 'bold', color: darkText}}>Total Impact:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: RF(2.8), fontWeight: 'bold', color: darkText}}>{stats.totalPoints}</Text>
                </View>
              </View>
    }
    return (
      <View style={{ backgroundColor: lightText, borderWidth: 1, borderRadius: 10, padding: 10, width: wp('60%'), marginTop: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
        <Text style={{ color: darkText,fontSize: RF(3.2), fontWeight: 'bold', alignSelf: 'center'}}>My Impact</Text>
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