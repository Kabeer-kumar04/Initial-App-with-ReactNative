import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
                score={8}
            />
            <ComponentsDetail
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score={7}
            />


        </View>
    )
}

const styles = StyleSheet.create({

})

export default ReusableComponents;