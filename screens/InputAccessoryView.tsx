import React, { useState } from 'react';
import { Button, InputAccessoryView, ScrollView, TextInput } from 'react-native';

const InputAccessoryViews = () => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = 'Placeholder Text';
  const [text, setText] = useState(initialText);

  return (
    <>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            padding: 16,
            marginTop: 50
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={text => setText(text)}
          value={text}
        />
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button
          onPress={() => setText(initialText)}
          title="Reset Text"
        />
      </InputAccessoryView>
    </>
  );
}

export default InputAccessoryViews;