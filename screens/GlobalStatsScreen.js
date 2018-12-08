import React from 'react';
import { Text, Image, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { globalStats } from '../src/actions/globalStats';
import GlobalImpact from '../src/components/Impact-Container';
import OceanImpact from '../src/components/Ocean-Impact';

class GlobalStatsScreen extends React.Component {
  componentWillMount() {
    this.props.dispatch(globalStats());
  }
  render() {
    if (this.props.loading == false && this.props.globalStats !== null) {
      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={{fontSize: 40}}>Global Stats</Text>
          <View style={{marginBottom: 10}}>
            <GlobalImpact 
              earth={this.props.globalStats.earthPoints}
              ocean={this.props.globalStats.oceanPoints}
              animal={this.props.globalStats.animalPoints}
              humanity={this.props.globalStats.humanityPoints}
              all={this.props.globalStats.points}
              title={'Impact'}
              />
          </View>
          <View style={{marginBottom: 10}}>
            <GlobalImpact 
              earth={this.props.globalStats.earthEntryCount}
              ocean={this.props.globalStats.oceanEntryCount}
              animal={this.props.globalStats.animalEntryCount}
              humanity={this.props.globalStats.humanityEntryCount}
              all={this.props.globalStats.entryCount}
              title={'Entries'}
              />
          </View>
          <View style={{marginBottom: 10}}>
            <OceanImpact
              artic={this.props.globalStats.oceans.artic.points}
              atlantic={this.props.globalStats.oceans.atlantic.points}
              indian={this.props.globalStats.oceans.indian.points}
              pacific={this.props.globalStats.oceans.pacific.points}
              southern={this.props.globalStats.oceans.southern.points}
              points={this.props.globalStats.oceanPoints}
              title={'Impact'}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <OceanImpact
              artic={this.props.globalStats.oceans.artic.entryCount}
              atlantic={this.props.globalStats.oceans.atlantic.entryCount}
              indian={this.props.globalStats.oceans.indian.entryCount}
              pacific={this.props.globalStats.oceans.pacific.entryCount}
              southern={this.props.globalStats.oceans.southern.entryCount}
              points={this.props.globalStats.oceanEntryCount}
              title={'Entries'}
            />
          </View>
        </View>
        </ScrollView>
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
    alignItems: 'center'
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