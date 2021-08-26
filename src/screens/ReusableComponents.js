import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ComponentsDetail from '../Component/ComponentsDetail';

const ReusableComponents = () => {
    return (
        <View>
            <ComponentsDetail
                title="Forest"
                imageSource={require('../../assets/forest.jpg')}
                score={9}
            />

            <ComponentsDetail
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                score={7}
            />

            <ComponentsDetail
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score={4}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ReusableComponents;