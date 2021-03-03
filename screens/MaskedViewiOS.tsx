import React from 'react';
import { MaskedViewIOS, Text, View } from 'react-native';
// import { MaskedViewIOS } from '@react-native-community/masked-view';

export default class MyMaskedView extends React.Component {
  render() {
    return (
      // Determines shape of the mask
      <MaskedViewIOS
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text
              style={{
                fontSize: 75,
                color: 'black',
                fontWeight: 'bold'
              }}>
              Hi Rida Hello Rida How Are You....!!!
            </Text>
          </View>
        }>
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: 'red'
          }}
        />
        <View
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: 'green'
          }}
        />
        <View
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: 'blue'
          }}
        />
      </MaskedViewIOS>
    );
  }
}