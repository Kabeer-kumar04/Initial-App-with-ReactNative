import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setCounter(counter + 1)
                }}
            >
                <Text style={styles.ButtonText}>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    setCounter(counter - 1)
                }}
            >
                <Text style={styles.ButtonText}>Decrease</Text>
            </TouchableOpacity>
            <Text style={styles.Text}>Current Count:{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        backgroundColor: "lightblue",
        textAlign: "center",
        margin: 10,
        borderRadius: 10,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "black"
    },
    Text: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10
    }
})

export default CounterScreen;