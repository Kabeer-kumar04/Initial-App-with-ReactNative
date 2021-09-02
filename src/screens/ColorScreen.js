import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';


const ColorScreen = () => {

    const [color, setColors] = useState([]);
    console.log(color);

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setColors([...color, randomRgb()]);
                }}
            >
                <Text style={styles.Heading}>Color Screen</Text>
            </TouchableOpacity>

            <FlatList
                keyExtractor={(item) => item}
                data={color}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />

                }}
            />

        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);


    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 25,
        textAlign: "center",
        color: "blue",
        marginVertical: 20,

    }
});

export default ColorScreen;