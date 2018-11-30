import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import requiresLogin from '../src/components/requires-login';

class EntriesScreen extends React.Component {
  
  render() {
    return (
      <View>
        <Text>New Entry</Text>
        <Text>Today I Helped...</Text>
        <Text>{this.props.entryType}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  entryType: state.entries.type
});

export default requiresLogin()(connect(mapStateToProps)(EntriesScreen));