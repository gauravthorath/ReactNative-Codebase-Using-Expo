import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const DisplayAnImageWithBorderWidthBorderRadius = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.header}> Image Style Border Width and Border Radius </Text>
      <Image
        style={{
          borderColor: "red",
          borderWidth: 5,
          height: 100,
          width: 200
        }}
        source={require("../assets/images/rose.jpg")}
      />
      <Text>
        <Text>borderColor & borderWidth</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
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

export default DisplayAnImageWithBorderWidthBorderRadius;