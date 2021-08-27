import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View style={styles.view}>
            <Image
                style={styles.Image}
                source={props.imageSource}
            />
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.Paragraph}>{props.Paragraph}</Text>
            <Text style={styles.Head}>{props.testHead}</Text>
            <Text style={styles.Ranking}>{props.testRanking}</Text>
            <Text style={styles.Head}>{props.ODIHead}</Text>
            <Text style={styles.Ranking}>{props.ODIRanking}</Text>
            <Text style={styles.Head}>{props.T20Head}</Text>
            <Text style={styles.Ranking}>{props.T20Ranking}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "lightgreen"
    },
    Image: {
        width: 320,
        height: 220,
        marginHorizontal: 50,
        marginVertical: 50,
        borderRadius: 10
    },
    heading: {
        fontSize: 40,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginVertical: -10,
    },
    text: {
        fontSize: 20,
        marginVertical: 5,
        marginHorizontal: 10,

    },
    Paragraph: {
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: "justify"
    },
    Head: {
        fontSize: 25,
        marginVertical: 10,
        marginHorizontal: 10,
        textAlign: "center"
    },
    Ranking: {
        fontSize: 40,
        fontWeight: "bold",
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: "center"
    }
})

export default ImageDetail;