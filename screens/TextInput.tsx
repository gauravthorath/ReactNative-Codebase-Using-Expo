import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <TextInput
      style={ styles.TextInput }
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
const styles = StyleSheet.create({
TextInput : {
  height:40,
  borderColor: 'gray',
  borderWidth: 1,
  flex:1,
  justifyContent:'center',

}

});

export default UselessTextInput;