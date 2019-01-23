import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class Oceans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: '',
    }
  }
  buttonPressed(ocean) {
    this.setState({
      pressed: ocean
    });
    this.props.oceanPressed(ocean);
  }
  render() {
    let oceans = ['Atlantic', 'Artic', 'Indian', 'Pacific', 'Southern'];
    let oceanButtons = oceans.map((ocean, index) => {
      return <TouchableOpacity 
        key={index}
        style={this.state.pressed === ocean ? styles.pressed : styles.unPressed}
        onPress={() => this.buttonPressed(ocean)}
        >
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: 'white'}}>{ocean}</Text>
        </TouchableOpacity>
    });
    return (
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10, justifyContent: 'center' }}>{oceanButtons}</View>
    )
  }
}
const styles = StyleSheet.create({
  pressed: {
    borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: 50, width: 110, justifyContent: 'center', backgroundColor: '#005c99', margin: 10
  },
  unPressed: {
    borderWidth: 1, borderRadius: 10, borderColor: '#666699', height: 50, width: 110, justifyContent: 'center', backgroundColor: '#33adff', margin: 10
  }
});
export default Oceans;