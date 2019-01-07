import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import RF from "react-native-responsive-fontsize";

/**
 * to be wrapped with redux-form Field component
 */
export default function Input(props) {
  const { input, meta, ...inputProps } = props;

  // do not display warning if the field has not been touched or if it's currently being edited
  const validationStyles = meta.touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;
    let error;
    if (meta.touched && meta.error) {
        error = meta.error;
    }
    let warning;
    if (meta.touched && meta.warning) {
        warning = meta.warning;
    }
  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <View style={{alignSelf: 'center'}}><Text style={{color:'red', fontSize: RF(2)}}>{error}{warning}</Text></View>
      <View style={{alignSelf: 'center'}}><Text style={{fontSize: RF(2)}}>{props.textTitle}</Text></View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        underlineColorAndroid='transparent'
      />
    </View>
  );
}

const styles = StyleSheet.create({
});