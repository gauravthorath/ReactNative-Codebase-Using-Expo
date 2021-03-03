import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const SafeAreaViews = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'purple'
  },
});

export default SafeAreaViews;