import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getStats }  from '../actions/stats';

class MyImpact extends React.Component {
  componentDidMount() {
    this.props.dispatch(getStats());
  }
  render() {
    let myStats = <Text>Loading</Text>;
    if (this.props.statsLoading === false && this.props.statsError === null) {
      let stats = this.props.stats;
      myStats = <View>
        <Text>Earth: {stats.earthPoints}</Text>
        <Text>Ocean: {stats.oceanPoints}</Text>
        <Text>Animal: {stats.animalPoints}</Text>
        <Text>Humanity: {stats.humanityPoints}</Text>
        <Text>Total Impact: {stats.totalPoints}</Text>
      </View>
    }
    return (
      <View>
        <Text>My Impact</Text>
        {myStats}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats.stats,
  statsError: state.stats.error,
  statsLoading: state.stats.loading
});

export default requiresLogin()(connect(mapStateToProps)(MyImpact));