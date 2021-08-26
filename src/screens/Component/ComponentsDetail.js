import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ComponentsDetail = props => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text style={styles.Text}>{props.title}</Text>
            <Text style={styles.score}>Image Score-{props.score} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 25,
        fontWeight: "bold"
    },
    score: {
        fontSize: 22
    }
})

export default ComponentsDetail;