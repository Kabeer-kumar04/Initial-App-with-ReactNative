import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const CountingList = () => {

    const Numbers = [
        { number: "One", },
        { number: "Two" },
        { number: "Three" },
        { number: "Four" },
        { number: "Five" },
        { number: "Six" },
        { number: "Seven" },
        { number: "Eight" },
        { number: "Nine" },
        { number: "Ten" },
        { number: "Eleven" }

    ]


    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={Numbers => Numbers.number}
                data={Numbers}
                renderItem={({ item }) => {
                    return <Text style={styles.listStyle}>{item.number}</Text>;
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 50,
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: 30,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        borderEndWidth: 1,

    }
})

export default CountingList;