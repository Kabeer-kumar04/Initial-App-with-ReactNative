import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import ImageDetail from '../Component/ImageDetail';

const ImageScreen = () => {
    return (
        <ScrollView>
            <ImageDetail
                imageSource={require('../../assets/baber.jpg')}
                heading="Babar Azam"
                text="(The Cricket legend)"
                Paragraph="Mohammad Babar Azam is a Pakistani international cricketer who captains Pakistan in all formats. A right-handed top-order batsman, Azam is widely regarded as one of the best contemporary batsmen in the world. He plays for Karachi Kings in Pakistan Super League and captains Central Punjab in domestic cricket."
                testHead="Test Ranking"
                testRanking={7}
                ODIHead="ODI Ranking"
                ODIRanking={1}
                T20Head="T20 Ranking"
                T20Ranking={2}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;