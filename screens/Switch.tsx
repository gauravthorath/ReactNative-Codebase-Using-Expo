import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

const Switches = () => {
  const [isEnabledFirst, setIsEnabledFirst] = useState(false);
  const [isEnabledSecond, setIsEnabledSecond] = useState(false);
  const toggleFirstSwitch = () => setIsEnabledFirst(previousState => !previousState);
  const toggleSecondSwitch = () => setIsEnabledSecond(previousState => !previousState);

  return (
    <View style={styles.container}>
    <Text>First Switch</Text>
      <Switch  key="Firstswitch"
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabledFirst ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleFirstSwitch}
        value={isEnabledFirst}
      />
      <Text>Second Switch</Text>
       <Switch key="secondswitch"
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabledSecond ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSecondSwitch}
        value={isEnabledSecond}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"

  }
});

export default Switches;