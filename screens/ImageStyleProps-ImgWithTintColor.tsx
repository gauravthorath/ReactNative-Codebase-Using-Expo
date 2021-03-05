import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const DisplayAnImageWithTintColor = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.header}>Style with Tint Color</Text>
      <Image
        style={{
          tintColor: "#000000",
          resizeMode: "contain",
          height: 100,
          width: 200
        }}
        source={require("../assets/images/rose.jpg")}
      />
      <Text>tintColor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    border: "5px solid purple"
  },
  header:{
    fontWeight:"bold",
    fontSize:20
  }
});

export default DisplayAnImageWithTintColor;