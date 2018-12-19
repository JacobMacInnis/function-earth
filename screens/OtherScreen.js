import React from 'react';
import { View, AsyncStorage, Button, StyleSheet, TextInput } from 'react-native';
import KeyboardShift from '../src/components/KeyboardShift';
import LoginForm from './../src/components/Login-Form';
import { DismissKeyboard } from '../src/components/DismissKeyboard';

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <KeyboardShift>
        {() => (
          <DismissKeyboard>
          <View style={styles.container}>
            <View style={styles.loginForm}>
              <LoginForm onSubmit={(values) => this.onSubmitLogin(values)} />
            </View>
          </View>
          </DismissKeyboard>
        )}
      </KeyboardShift>
    );
  }
 
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'white'
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
  },
  loginForm: {
    backgroundColor: 'blue',
    marginTop: 300,
    width: 200
  }
});

