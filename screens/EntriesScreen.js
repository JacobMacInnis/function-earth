import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import requiresLogin from '../src/components/requires-login';

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
    console.log(entry)
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Image source={require('../src/assets/images/function-earth-logo.png')} 
            style={{alignSelf: 'center', marginTop: 3, width: 75, height: 75}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <Text style={{alignSelf: 'center', fontSize: 40, fontWeight: 'bold'}}>Function Earth</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
          <Text style={{alignSelf: 'center', fontSize: 25, fontWeight: 'bold'}}>New <Text style={{color: 'blue', borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',}}>{this.props.entryType}</Text> Entry</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'powderblue', alignSelf: 'center'}}>
          <Text style={{ fontSize: 18}}>Country</Text>
          <TextInput
            value={this.state.country}
            style={{ width: 200, borderWidth: 1, height: 50, fontSize: 15, }}
            onChangeText={country => this.setState({country})}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <Text>State/Region</Text>
          <TextInput
            onChangeText={stateRegion => this.setState({stateRegion})}
            value={this.state.stateRegion}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
          <Text>Today I helped preserve our {this.props.entryType}. I...</Text>
        </View>
        <View style={{flex: 2}}>
          <TextInput
            onChangeText={entry => this.setState({entry})}
            value={this.state.entry}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <Button
            title='Log My Action'
            onPress={() => this.logNewEntry()}
          />
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