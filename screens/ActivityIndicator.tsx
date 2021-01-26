import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const ActivityIndicators = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ececec"
    
  },
  horizontal: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 10,
    height: "90%"
  }
});

export default ActivityIndicators;