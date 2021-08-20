import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const CountryCode = () => {

    const Countries = [{ country: "States", codes: "Country Code" }]
    const Country1 = [{ state1: "Pakistan", code1: "+92" }]
    const Country2 = [{ state2: "America", code2: "+146" }]
    const Country3 = [{ state3: "Afghanistan", code3: "+921" }]
    const Country4 = [{ state4: "Australia", code4: "+912" }]
    const Country5 = [{ state5: "Newzealand", code5: "+422" }]
    const Country6 = [{ state6: "WestIndies", code6: "+342" }]
    const Country7 = [{ state7: "India", code7: "+67" }]
    const Country8 = [{ state8: "SouthAfrica", code8: "+991" }]
    const Country9 = [{ state9: "England", code9: "+920" }]
    const Country10 = [{ state10: "Dubai", code10: "+211" }]








    return (
        <View>
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Countries => Countries.country}
                keyExtractor={Countries => Countries.codes}
                data={Countries}
                renderItem={({ item }) => {
                    return <Text style={styles.Heading}>{item.country}           {item.codes}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country1 => Country1.state1}
                keyExtractor={Country1 => Country1.code1}
                data={Country1}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state1}                          {item.code1}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country2 => Country2.state2}
                keyExtractor={Country2 => Country2.code2}
                data={Country2}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state2}                          {item.code2}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country3 => Country3.state3}
                keyExtractor={Country3 => Country3.code3}
                data={Country3}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state3}                   {item.code3}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country4 => Country4.state4}
                keyExtractor={Country4 => Country4.code4}
                data={Country4}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state4}                         {item.code4}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country5 => Country5.state5}
                keyExtractor={Country5 => Country5.code5}
                data={Country5}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state5}                   {item.code5}</Text>
                }}
            />
            <FlatList
                keyExtractor={Country6 => Country6.state6}
                keyExtractor={Country6 => Country6.code6}
                data={Country6}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state6}                     {item.code6}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country7 => Country7.state7}
                keyExtractor={Country7 => Country7.code7}
                data={Country7}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state7}                                 {item.code7}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country8 => Country8.state8}
                keyExtractor={Country8 => Country8.code8}
                data={Country8}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state8}                    {item.code8}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country9 => Country9.state9}
                keyExtractor={Country9 => Country9.code9}
                data={Country9}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state9}                          {item.code9}</Text>
                }}
            />
            <FlatList
                Vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={Country10 => Country10.state10}
                keyExtractor={Country10 => Country10.code10}
                data={Country10}
                renderItem={({ item }) => {
                    return <Text style={styles.State}>{item.state10}                              {item.code10}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        marginVertical: 20,
        marginHorizontal: 10
    },
    State: {
        fontSize: 20,
        // fontWeight: "bold",
        marginHorizontal: 10,
        marginVertical: 10,
        textAlign: "justify",
        borderBottomWidth: 2,
    }
})


export default CountryCode;