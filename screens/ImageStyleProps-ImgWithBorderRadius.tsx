import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ImageStylePropsImgWithBorderRadius = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Style Border Radius</Text>
      <View>
        <Image
          style={{
            borderTopRightRadius: 20,
            height: 100,
            width: 200
          }}
          source={require("../assets/images/rose.jpg")}
        />
        <Text>borderTopRightRadius</Text>
      </View>
      <View>
        <Image
          style={{
            borderBottomRightRadius: 20,
            height: 100,
            width: 200
          }}
          source={require("../assets/images/rose.jpg")}
        />
        <Text>borderBottomRightRadius</Text>
      </View>
      <View>
        <Image
          style={{
            borderBottomLeftRadius: 20,
            height: 100,
            width: 200
          }}
          source={require("../assets/images/rose.jpg")}
        />
        <Text>borderBottomLeftRadius</Text>
      </View>
      <View>
        <Image
          style={{
            borderTopLeftRadius: 20,
            height: 100,
            width: 200
          }}
          source={require("../assets/images/rose.jpg")}
        />
        <Text>borderTopLeftRadius</Text>
      </View>
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

export default ImageStylePropsImgWithBorderRadius;