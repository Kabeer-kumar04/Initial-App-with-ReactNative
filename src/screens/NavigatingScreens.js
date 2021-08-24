import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';


const NavigatingScreen = ({ navigation }) => {

    return (
        < View>
            <Text style={styles.Heading}>My two Projects</Text>
            <Button
                onPress={() => { navigation.navigate('Counting') }}
                title="Math Counting"
            />
            <TouchableOpacity onPress={() => { navigation.navigate('Country') }}>
                <Text style={styles.Button}>Country Codes</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
        color: "black"
    },
    Button: {
        fontSize: 25,
        marginVertical: 50,
        textAlign: "center",
        backgroundColor: "lightgreen",
        color: "white",
        padding: 10
    }
})


export default NavigatingScreen;