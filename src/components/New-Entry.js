import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import requiresLogin from './requires-login';
import { entries } from '../actions/entries';
import colorsArray from '../../assets/colors/colorsArray';


class NewEntry extends React.Component {
  newEntry = type => {
    this.props.dispatch(entries(type))
  };
  render() {
    let types = ['Earth', 'Ocean', 'Animals', 'Humanity'];
    let buttons = types.map((type, i) =>  {
      return (
        <TouchableOpacity
          style={{borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: hp('7%'), width: wp('60%'), marginVertical: hp('1%') , justifyContent: 'center',  shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, backgroundColor: colorsArray[i]}}
          key={i} 
          title={type} 
          onPress={() => this.newEntry(type)}
          accessibilityLabel={type} 
        >
        <Text style={{fontSize: RF(4), alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>{type}</Text>
        </TouchableOpacity>
      );
    });
    return (
      <View style={{backgroundColor: 'white', width: wp('80%'), borderWidth: 2, borderColor: '#666699', borderRadius: 15, alignItems: 'center', marginTop: hp('2%'), paddingBottom: hp('1%'), paddingTop: hp('1%')}}>
        <Text style={{fontSize: RF(4.5), fontWeight: 'bold', marginTop: 5}}>New Entry</Text>
        <Text style={{fontSize: RF(3), marginTop: 3}}>Today I Helped...</Text>
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