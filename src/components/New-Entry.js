import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { entries } from '../actions/entries';


class NewEntry extends React.Component {
  newEntry = type => {
    this.props.dispatch(entries(type))
  };
  render() {
    let types = ['Earth', 'Ocean', 'Animals', 'Humanity'];
    let buttons = types.map((type, i) =>  {
      return (
        <Button
          key={i} 
          title={type} 
          onPress={() => this.newEntry(type)}
          accessibilityLabel={type} 
        />
      );
    });
    return (
      <View>
        <Text>New Entry</Text>
        <Text>Today I Helped...</Text>
        {buttons}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats.stats,
  statsError: state.stats.error,
  statsLoading: state.stats.loading,
  entryType: state.entries.type
});

export default requiresLogin()(connect(mapStateToProps)(NewEntry));