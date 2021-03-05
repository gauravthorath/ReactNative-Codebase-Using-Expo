import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageStylePropsImgWithStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Image Style Props </Text>
      <View>
        <Image
          style={{
            resizeMode: "cover",
            height: 100,
            width: 200
          }}
          source={require('../assets/images/rose.jpg')}
        />
        <Text>resizeMode : cover</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require('../assets/images/rose.jpg')}
        />
        <Text>resizeMode : contain</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "stretch",
            height: 100,
            width: 200
          }}
          source={require('../assets/images/rose.jpg')}
        />
        <Text>resizeMode : stretch</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "repeat",
            height: 100,
            width: 200
          }}
          source={require('../assets/images/rose.jpg')}
        />
        <Text>resizeMode : repeat</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "center",
            height: 100,
            width: 200
          }}
          source={require('../assets/images/rose.jpg')}
        />
        <Text>resizeMode : center</Text>
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

export default ImageStylePropsImgWithStyle;