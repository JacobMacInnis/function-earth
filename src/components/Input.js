import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

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
        error = <View title="form-error"><Text style={{color:'red'}}>{meta.error}</Text></View>;
    }

    let warning;
    if (meta.touched && meta.warning) {
        warning = (
            <View title="form-warning"><Text style={{color:'red'}}>{meta.warning}</Text></View>
        );
    }
  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <View>{error}{warning}</View>
        <TextInput
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          style={styles.input}
          underlineColorAndroid='transparent'
        />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 5
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20
  },
  valid: {
    borderColor: '#53E69D'
  },
  invalid: {
    borderColor: '#F55E64'
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
});