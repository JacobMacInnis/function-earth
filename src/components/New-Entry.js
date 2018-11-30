import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';


class NewEntry extends React.Component {
  newEntry(entry) {
    console.log(entry);
  }
  render() {
    return (
      <View>
        <Text>New Entry</Text>
        <Text>Today I Helped...</Text>
        <Button 
          title='Earth' 
          onPress={() => this.newEntry('earth')}
          accessibilityLabel='earth' 
        />
        <Button 
          title='Ocean'  
          onPress={() => this.newEntry('ocean')}
          accessibilityLabel='ocean' 
        />
        <Button 
          title='Animals'  
          onPress={() => this.newEntry('animal')}
          accessibilityLabel='animal' 
        />
        <Button 
          title='Humanity' 
          onPress={() => this.newEntry('humanity')}
          accessibilityLabel='humanity' 
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats.stats,
  statsError: state.stats.error,
  statsLoading: state.stats.loading
});

export default requiresLogin()(connect(mapStateToProps)(NewEntry));