import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const RefreshControls = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [refreshedText, setrefreshedText] = React.useState(0);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(3000).then(() => { 
      setrefreshedText(prevSradte => prevSradte + 1);
      setRefreshing(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator { refreshedText }</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RefreshControls;