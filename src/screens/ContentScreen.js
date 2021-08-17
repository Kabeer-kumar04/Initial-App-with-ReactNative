import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ContentScreen = () => {

    const Name = "Kabeer";

    return (
        <View>
            <Text style={Styles.TextStyle}>Getting started with reactnative!</Text>
            <Text style={Styles.Para}>My name is {Name}</Text>
        </View>
    )


};

const Styles = StyleSheet.create({
    TextStyle: {
        fontSize: 45
    },
    Para: {
        fontSize: 20
    }
})

export default ContentScreen;