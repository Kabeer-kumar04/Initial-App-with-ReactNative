import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";


const ListScreen = () => {
    const friends = [
        { name: 'friend 1', Age: "20" },
        { name: 'friend 2', Age: "21" },
        { name: 'friend 3', Age: "22" },
        { name: 'friend 4', Age: "23" },
        { name: 'friend 5', Age: "24" },
        { name: 'friend 6', Age: "25" },
        { name: 'friend 7', Age: "26" },
        { name: 'friend 8', Age: "27" },
        { name: 'friend 9', Age: "28" },
        { name: 'friend 10', Age: "29" }
    ];
    return (

        <FlatList
            // horizontal
            showsVerticalScrollIndicator={false}
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friends) => { return (friends.name) }}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={Styles.TextStyle}>{item.name}- Age{item.Age}</Text>
            }}
        />


    );

}

const Styles = StyleSheet.create(
    {
        TextStyle: {
            fontSize: 20,
            marginVertical: 50
        }
    }
);


export default ListScreen;

