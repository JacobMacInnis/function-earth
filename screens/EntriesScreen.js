import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import requiresLogin from '../src/components/requires-login';
import {leaveEntryScreen, newEntry} from '../src/actions/entries';

const examples = {
  Earth: 'eg. built a compost bin in back yard',
  Ocean: 'eg. picked up plastic bottles on the beach',
  Animals: 'eg. adopted a sheltered dog',
  Humanity: 'eg. volunteered for patients with Parkinsons Disease'};

class EntriesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: this.props.country,
      stateRegion: this.props.state,
      entry: examples[this.props.entryType]
    };
  }
  logNewEntry() {
    let entry = {
      country: this.state.country,
      stateRegion: this.state.stateRegion,
      entry: this.state.entry
    };
    this.props.dispatch(newEntry(entry));
  }
  componentWillUnmount() {
    this.props.dispatch(leaveEntryScreen());
  }
  render() {
    return (
      <View style={{flex: 2, backgroundColor: 'white'}}>
        <View style={{flex: 2}}>
          <Image source={require('../src/assets/images/function-earth-logo.png')} 
            style={{alignSelf: 'center', marginTop: 3, width: 100, height: 100}} />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', fontSize: 40, fontWeight: 'bold'}}>Function Earth</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', fontSize: 25, fontWeight: 'bold'}}>New <Text style={{color: 'blue', borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',}}>{this.props.entryType}</Text> Entry</Text>
        </View>
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{ fontSize: 18}}>Country</Text>
          <TextInput
            value={this.state.country}
            style={{ width: 200, borderWidth: 1, borderRadius: 10, height: 50, fontSize: 16}}
            textAlign={'center'}
            onChangeText={country => this.setState({country})}
          />
        </View>
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>State/Region</Text>
          <TextInput
            style={{ width: 200, borderWidth: 1, borderRadius: 10, height: 50,   fontSize: 16}}
            textAlign={'center'}
            onChangeText={stateRegion => this.setState({stateRegion})}
            value={this.state.stateRegion}
          />
        </View>
        <View style={{flex: 1, marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize: 22}}>Today I helped preserve our {this.props.entryType}. I...</Text>
        </View>
        <View style={{flex: 6, alignItems: 'center'}}>
          <TextInput
            style={{ width: 360, borderWidth: 1, borderRadius: 10, height: 240,   fontSize: 18}}
            multiline={true}
            textAlign={'center'}
            onChangeText={entry => this.setState({entry})}
            value={this.state.entry}
          />
        </View>
        <View style={{flex: 3, alignItems: 'center'}}>
          <TouchableOpacity
          style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: 60, width: 200, margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: 'green'}} 
          onPress={() => this.logNewEntry()}
          accessibilityLabel='log entry button' 
          >
            <Text style={{fontSize: 25, alignSelf: 'center', color: 'white'}}>Log My Action</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
});

const mapStateToProps = state => ({
  entryType: state.entries.type,
  country: state.stats.stats.country,
  state: state.stats.stats.state
});

export default requiresLogin()(connect(mapStateToProps)(EntriesScreen));