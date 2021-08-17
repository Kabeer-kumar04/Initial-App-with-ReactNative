import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const OverView = () => {
    return (
        <View>
            <Text style={Styles.para}>Hi There!</Text>
        </View>
    )
};

const Styles = StyleSheet.create({
    para: {
        fontSize: 105,
    }
});

export default OverView;