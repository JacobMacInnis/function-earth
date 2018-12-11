import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
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
      myStats = <View style={{height: 160}}>
                  <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Earth:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.earthPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Ocean:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.oceanPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Animal:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.animalPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row', height: 10, padding: 2}}>
                  <Text style={{flex: 2, fontSize: 18}}>Humanity:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 18}}>{stats.humanityPoints}</Text>
                </View>
                <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row',  height: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 5, borderWidth: 1, borderRadius: 10,}}>
                  <Text style={{flex: 2, fontSize: 20, fontWeight: 'bold'}}>Total Impact:</Text> 
                  <Text style={{flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 'bold'}}>{stats.totalPoints}</Text>
                </View>
              </View>
    }
    return (
      <View style={{borderWidth: 1, borderRadius: 10, padding: 10, width: 250, marginTop: 5}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>My Impact</Text>
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