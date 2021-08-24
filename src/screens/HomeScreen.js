import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.Greeting}>Welcome to my homescreen</Text>
      <TouchableOpacity onPress={() => { navigation.navigate('Country') }}><Text style={styles.ButtonText}>Country Codes</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Counting') }}><Text style={styles.ButtonText}>Math Counting</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("Image") }}>
        <Text style={styles.ButtonText}>Go to images</Text>
      </TouchableOpacity>
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
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "lightpink",
    textAlign: "center",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: "black"
  }
});

export default HomeScreen;
