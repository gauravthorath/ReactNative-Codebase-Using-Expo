import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Fourth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Sixth Item',
  },
  {
    id: '7',
    title: 'Seventh Item',
  },
  {
    id: '8',
    title: 'Eighth Item',
  },
  {
    id: '9',
    title: 'Ninth Item',
  },
  {
    id: '10',
    title: 'Tenth Item',
  },
  {
    id: '11',
    title: 'Eleventh Item',
  },
  {
    id: '12',
    title: 'Twelth Item',
  },
  {
    id: '13',
    title: 'Thirtheenth Item',
  },
  {
    id: '14',
    title: 'Fourteenth Item',
  },
  {
    id: '15',
    title: 'Fifteenth Item',
  },
  {
    id: '16',
    title: 'Sisteenth Item',
  },
  {
    id: '17',
    title: 'Seventeenth Item',
  },
  {
    id: '18',
    title: 'Eighteenth Item',
  },
  {
    id: '19',
    title: 'Ninteenth Item',
  },
  {
    id: '20',
    title: 'Tweentith Item',
  },
  {
    id: '21',
    title: 'Tweenty one Item',
  },
];

const Item = ({ title }:{title:any}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatLists = () => {
  const renderItem = ({ item }:{item:any}) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexGrow:1
  },
  item: {
    backgroundColor: '#f962ff',
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 20,
  },
});

export default FlatLists;