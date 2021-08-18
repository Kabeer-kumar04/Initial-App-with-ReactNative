import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const StaticUser = () => {

    return (
        <View>
            <TextInput style={Styles.Account}>Create new account</TextInput>
            <TextInput style={Styles.Components}>full Name</TextInput>
            <TextInput style={Styles.Components}>Phone Number</TextInput>
            <TextInput style={Styles.Components}>Email Adress</TextInput>
            <TextInput style={Styles.Components}>password</TextInput>
            <TextInput style={Styles.Button}>Sign up</TextInput>
        </View>
    );
};


const Styles = StyleSheet.create({
    Account: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#ff69b4',
        padding: '4%',

    },
    Components: {
        fontSize: 20,
        marginTop: '5%',
        margin: '5%',
        textAlign: "center",
        borderColor: '#a9a9a9',
        height: 30,
        width: 300,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        padding: 3,
        marginLeft: 50,

    },
    Button: {
        fontSize: 20,
        marginTop: '5%',
        margin: '5%',
        textAlign: "center",
        borderColor: '#a9a9a9',
        height: 30,
        width: 180,
        borderRadius: 25,
        backgroundColor: '#ff69b4',
        padding: 5,
        marginLeft: 110,
        color: "#ffffff"
    }
})


export default StaticUser;