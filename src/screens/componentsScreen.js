import React from 'react';
import { Text,View, StyleSheet } from 'react-native';



const ComponentScreen = () => {

    
    const name="kabeer kumar"
    return (
        <View>
            
                <Text style={styles.heading}>{name}</Text>
                <Text style={styles.intro}>Getting started with Reactnative</Text>
             

        </View>
    );
}



const styles = StyleSheet.create({
  heading:{
    fontSize:45
    },
    intro: {
        fontSize: 20
    }   
});



export default ComponentScreen;