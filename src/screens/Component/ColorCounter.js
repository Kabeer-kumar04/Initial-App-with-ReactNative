import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';



const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`More ${color}`} />
            <Button onPress={() => onDecrease()} title={`Less ${color}`} />
        </View>
    )

}

const styles = StyleSheet.create({

})

export default ColorCounter;