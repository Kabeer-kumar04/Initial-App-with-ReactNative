import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return(
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Text style={styles.Greeting}>Welcome to my homescreen</Text>
    <Button title="Touch me" onPress={() => {console.log("pressed")}} />
  </View >)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  },
  Greeting: {
    fontSize: 18,
    textAlign: "center"

  }
});

export default HomeScreen;
