import React from 'react';
import { Text, View, StyleSheet, Button, ImagePropTypes } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const NavigatingScreen = ({ navigation }) => {
    return (
        < View>
            <Text style={styles.TextLine}>Today We'll learn about Buttons</Text>
            <Button onPress={() => navigation.navigate('List')}
                title="List Screen"
            />
            <TouchableOpacity
                onPress={() => console.log('clicked')}>
                <Text>Tap me!</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    TextLine: {
        fontSize: 25,
    }

})


export default NavigatingScreen;