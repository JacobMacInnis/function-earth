import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { toggleMenu } from '../actions/hamburgerMenu';
import { connect } from 'react-redux';

class HamburgerMenu extends React.Component {
  toggleMenu = () => {
    this.props.dispatch(toggleMenu());
  }
  render() {
    return (
      <TouchableOpacity
      style={{height: 25, width: 45, margin: 10, justifyContent: 'center'}} 
      onPress={() => this.toggleMenu()}
      accessibilityLabel='hamburger menu' 
      >
      <Text style={{backgroundColor: 'green', height: 7, width: 45, marginBottom: 3, borderWidth: 1, borderRadius: 5, borderColor: 'white', overflow: 'hidden'}}></Text>
      <Text style={{backgroundColor: 'green', height: 7, width: 45, marginBottom: 3, borderWidth: 1, borderRadius: 5, borderColor: 'white', overflow: 'hidden'}}></Text>
      <Text style={{backgroundColor: 'green', height: 7, width: 45, borderWidth: 1, borderRadius: 5, borderColor: 'white', overflow: 'hidden'}}></Text>
      </TouchableOpacity>
    )
    }
};

const mapStateToProps = state => {
  return{
      hamburgerMenu: state.hamburgerMenu.active
  }
};

export default connect(mapStateToProps)(HamburgerMenu);