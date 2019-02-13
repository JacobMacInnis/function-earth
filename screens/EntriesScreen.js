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

import { Entypo } from '@expo/vector-icons';
import { lightText } from '../src/components/helpers/textColors';

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
    let validate = this.state.entry;
    if ( this.state.entry === examples[ this.props.entryType ] ) {
      this.setState({alertType: 'Invalid', alertMessage: 'Entry must be unique'})
    } else if (!validate.replace(/\s/g, '').length || validate === '') {
      this.setState({alertType: 'Invalid', alertMessage: 'Entry must not be blank'});
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
        this.props.dispatch(leaveEntryScreen());
      })
      .then(() => {
        this.props.navigation.navigate('Home');
      })
    };
  };
  componentWillUnmount() {
    this.props.dispatch(leaveEntryScreen());
  }
  oceanPressed(ocean) {
    this.setState({
      ocean: ocean
    });
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
    let image = undefined;
    if (this.props.image !== null) {
      image = this.props.image;
    }
    let conditonalText1 = '';
    if (this.props.entryType === 'Ocean' || this.props.entryType === 'Earth') {
      conditonalText1 = 'our';
    }

    return (
      <KeyboardShift>
        {() => (
        <DismissKeyboard>
          <View style={{flex: 2, backgroundColor: lightText}}>
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
              <Text style={{alignSelf: 'center', fontSize: RF(5.2), fontWeight: 'bold'}}>New <Text style={{color: colorsObj[this.props.entryType], borderRadius: 4, borderWidth: 0.5, borderColor: 'black',
  }}>{this.props.entryType}</Text> Entry</Text>
            </View>
            {this.props.entryType === 'Ocean' ? <View style={{flex: 4, alignItems: 'center'}}><Oceans oceanPressed={(ocean) => this.oceanPressed(ocean)}/></View> : <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}><Text style={{ fontSize: RF(3), fontWeight: 'bold'}}>Country</Text>
              <TextInput
                value={this.state.country}
                style={{ width: wp('40%'), borderColor: colorsObj[this.props.entryType], borderWidth: 1, borderRadius: 10, height: 50, fontSize: RF(3), backgroundColor: 'white'}}
                textAlign={'center'}
                onChangeText={country => this.setState({country})}/></View>}
            {this.props.entryType !== 'Ocean' ? <View style={{flex: 2, alignItems: 'center'}}>
              <Text style={{fontSize: RF(3), fontWeight: 'bold'}}>State/Region</Text>
              <TextInput
                style={{ width: wp('40%'), borderColor: colorsObj[this.props.entryType], borderWidth: 1, borderRadius: 10, height: 50, fontSize: RF(3), backgroundColor: 'white'}}
                textAlign={'center'}
                onChangeText={stateRegion => this.setState({stateRegion})}
                value={this.state.stateRegion}
              />
            </View> : <Text></Text>}
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: RF(3), fontWeight: 'bold', textAlign: 'center'}}>I helped preserve {conditonalText1} {this.props.entryType}{this.props.entryType === 'Ocean' ? 's' : ''}.  &nbsp; &nbsp;I...</Text>
            </View>
            <View style={{flex: 6, alignItems: 'center', }}>
              <View style={{flex: 2}}>
                <TextInput
                  style={{ width: wp('80%'), height: hp('21%'), borderWidth: 2, borderRadius: 10, borderColor: colorsObj[this.props.entryType],   fontSize: RF(3), paddingTop: 5, paddingBottom: 0, alignItems: 'center', backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4}}
                  textAlign={'center'}
                  multiline={true}
                  clearTextOnFocus={true}
                  onChangeText={entry => this.setState({entry})}
                  onFocus= {() => this.setState({entry : ''})}
                  defaultValue={this.state.entry}
                />
              </View>
              <View style={{ flex: 2, alignItems: 'stretch',backgroundColor: 'grey'}}>
                {image !== undefined && <Image source={{uri: image}} 
                style={{ width: 300, height: 300 }}
                />}
              </View>
              {/* <View style={{flex: 1}}>
                <TouchableOpacity 
                    style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: RF(5), width: RF(5), margin: 10, justifyContent: 'center', alignItems: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: colorsObj[this.props.entryType]}} 
                    onPress={() => this.props.navigation.navigate('CameraScreen')}
                    accessibilityLabel='add image'>
                    <Entypo name="camera" size={RF(3)} color={'white'}/>
                </TouchableOpacity>
              </View> */}
            </View>
            <View style={{flex: 3, alignItems: 'center'}}>
              <TouchableOpacity
              style={{ borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: hp('8%'), width: wp('50%'), margin: 10, justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: colorsObj[this.props.entryType]}} 
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
  stats: state.stats.stats,
  image: state.entries.image
});

export default requiresLogin()(connect(mapStateToProps)(EntriesScreen));