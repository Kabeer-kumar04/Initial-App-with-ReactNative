import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListBuilding = () => {

    const Students = [
        { name: "Student#01", Age: 29 },
        { name: "Student#02", Age: 29 },
        { name: "Student#03", Age: 28 },
        { name: "Student#04", Age: 27 },
        { name: "Student#05", Age: 26 },
        { name: "Student#06", Age: 25 },
        { name: "Student#07", Age: 24 },
        { name: "Student#08", Age: 23 },
        { name: "Student#09", Age: 22 },
        { name: "Student#10", Age: 21 },


    ]



    return (

        <FlatList
            // horizontal
            showsVerticalScrollIndicator={false}
            keyExtractor={student => student.name}
            data={Students}
            renderItem={({ item }) => {
                return <Text style={styles.TextStyle}>{item.name} - Age:{item.Age}</Text>;
            }}
        />

    )
}

const styles = StyleSheet.create({
    TextStyle: {
        marginVertical: 50,
        fontSize: 20
    }
})

export default ListBuilding;