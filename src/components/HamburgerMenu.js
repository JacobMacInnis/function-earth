import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { toggleMenu } from '../actions/hamburgerMenu';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";

class HamburgerMenu extends React.Component {
  toggleMenu = () => {
    this.props.dispatch(toggleMenu());
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.hamburgerContainer} 
        onPress={() => this.toggleMenu()}
        accessibilityLabel='hamburger menu' 
      >
        <Text style={styles.hamburgerLines}></Text>
        <Text style={styles.hamburgerLines}></Text>
        <Text style={styles.hamburgerLines}></Text>
      </TouchableOpacity>
    )
    }
};

const styles = StyleSheet.create({
  hamburgerContainer: {
    height: hp('8%'),
    width: wp('12%'), 
    margin: 10, 
    justifyContent: 'center'
  },
  hamburgerLines: {
    backgroundColor: 'blue', 
    height: hp('1.3%'),
    width: wp('12%'),
    marginBottom: 3, 
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: 'white', 
    overflow: 'hidden'
  }
});

const mapStateToProps = state => {
  return{
      hamburgerMenu: state.hamburgerMenu.active
  }
};

export default connect(mapStateToProps)(HamburgerMenu);