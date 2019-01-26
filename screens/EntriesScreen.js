import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
// Import Components
import { DismissKeyboard } from '../src/components/DismissKeyboard';
import KeyboardShift from '../src/components/KeyboardShift';
import Oceans from '../src/components/Oceans';
import requiresLogin from '../src/components/requires-login';
// Import Actions
import { getStats }  from '../src/actions/stats';
import { leaveEntryScreen, newEntry } from '../src/actions/entries';
import colorsObj from '../assets/colors/colorsObj';

const examples = {
  Earth: 'eg. built a compost bin in back yard',
  Ocean: 'eg. picked up plastic bottles on the beach',
  Animals: 'eg. adopted a sheltered dog',
  Humanity: 'eg. volunteered for patients with Parkinsons Disease'
};

class EntriesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: this.props.country,
      stateRegion: this.props.stateRegion,
      entry: examples[this.props.entryType],
      alertType: null,
      alertMessage: null,
      ocean: ''
    };
  }
  logNewEntry() {
    if ( this.state.entry === examples[ this.props.entryType ] ) {
      this.setState({alertType: 'Invalid', alertMessage: 'Entry must be unique'})
    } else {
      let Entry = {
        entryType: this.props.entryType,
        country: this.state.country,
        stateRegion: this.state.stateRegion,
        entry: this.state.entry,
        ocean: this.state.ocean
      };
      const dispatchEntry = new Promise((resolve,reject) => {
        resolve(this.props.dispatch(newEntry(Entry)))
      });
      dispatchEntry
      .then(() => {
        this.props.dispatch(getStats());
      })
      .then(() => {
        this.props.navigation.navigate('Home');
      })
    };
  };
  oceanPressed(ocean) {
    this.setState({
      ocean: ocean
    });
  };
  componentWillUnmount() {
    this.props.dispatch(leaveEntryScreen());
  };
  render() {
    let alert = false;
    if (this.state.alertType !== null) {
      alert = Alert.alert(
        `${this.state.alertType}`,
        `${this.state.alertMessage}`,
        [
          {text: 'OK', onPress: () => this.setState({
            alertType: null, alertMessage: null
          })}
        ]
      )
    }
    return (
      <KeyboardShift>
        {() => (
        <DismissKeyboard>
          <View style={{flex: 2, backgroundColor: 'white'}}>
            <View style={{flex: 2, marginTop: 10}}>
              <Image source={require('../src/assets/images/function-earth-logo.png')} 
              style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}} 
              resizeMode="contain"/>
                {/* style={{alignSelf: 'center', marginTop: 3, width: 100, height: 100}} /> */}
            </View>
            {/* <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={{alignSelf: 'center', fontSize: RF(4), fontWeight: 'bold'}}>Function Earth</Text>
            </View> */}
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={{alignSelf: 'center', fontSize: RF(5.2), fontWeight: 'bold'}}>New <Text style={{color: colorsObj[this.props.entryType], borderRadius: 4, borderWidth: 0.5, borderColor: 'black',}}>{this.props.entryType}</Text> Entry</Text>
            </View>
            {this.props.entryType === 'Ocean' ? <View style={{flex: 4, alignItems: 'center'}}><Oceans oceanPressed={(ocean) => this.oceanPressed(ocean)}/></View> : <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}><Text style={{ fontSize: RF(3), fontWeight: 'bold'}}>Country</Text>
              <TextInput
                value={this.state.country}
                style={{ width: wp('40%'), borderWidth: 1, borderRadius: 10, height: 50, fontSize: RF(3)}}
                textAlign={'center'}
                onChangeText={country => this.setState({country})}/></View>}
            {this.props.entryType !== 'Ocean' ? <View style={{flex: 2, alignItems: 'center'}}>
              <Text style={{fontSize: RF(3), fontWeight: 'bold'}}>State/Region</Text>
              <TextInput
                style={{ width: wp('40%'), borderWidth: 1, borderRadius: 10, height: 50, fontSize: RF(3)}}
                textAlign={'center'}
                onChangeText={stateRegion => this.setState({stateRegion})}
                value={this.state.stateRegion}
              />
            </View> : <Text></Text>}
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: RF(3), fontWeight: 'bold', textAlign: 'center'}}>Today I helped preserve our {this.props.entryType}. I...</Text>
            </View>
            <View style={{flex: 6, alignItems: 'center', }}>
              <TextInput
                style={{ width: wp('80%'), height: hp('25%'), borderWidth: 1, borderRadius: 10,   fontSize: RF(3), paddingTop: 5, paddingBottom: 0, alignItems: 'center'}}
                textAlign={'center'}
                multiline={true}
                onChangeText={entry => this.setState({entry})}
                value={this.state.entry}
              />
            </View>
            <View style={{flex: 3, alignItems: 'center'}}>
              <TouchableOpacity
              style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: hp('10%'), width: wp('45%'), margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: colorsObj[this.props.entryType]}} 
              onPress={() => this.logNewEntry()}
              accessibilityLabel='log entry button' 
              >
                <Text style={{fontSize: RF(3.5), alignSelf: 'center', fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Log My Action</Text>
              </TouchableOpacity>
            </View>
            {alert}
          </View>
      </DismissKeyboard>
        )}
      </KeyboardShift>
    );
  }
}
const styles = StyleSheet.create({
});

const mapStateToProps = state => ({
  entryType: state.entries.type,
  country: state.stats.stats.country,
  stateRegion: state.stats.stats.stateRegion,
  stats: state.stats.stats
});

export default requiresLogin()(connect(mapStateToProps)(EntriesScreen));