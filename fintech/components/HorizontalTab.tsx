import React from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";

const HorizontalTab = () => {
    const services = [
        {
            index: "1",
            name: "Services2",
        },
        {
            index: "2",
            name: "Service1",
        },
        {
            index: "3",
            name: "Service2",
        },
        {
            index: "4",
            name: "Service3",
        },
        {
            index: "5",
            name: "Service4",
        },
        {
            index: "6",
            name: "Service5",
        },
        {
            index: "7",
            name: "Service6",
        },
        {
            index: "8",
            name: "Service7",
        },
    ];

    const renderServiceItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.button} onPress={() => console.log(item.name)}>
                <Text style={styles.headingText}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            style={styles.listStyle}
            keyExtractor={(item) => item.index}
            horizontal
            inverted
            showsHorizontalScrollIndicator={false}
            data={services}
            renderItem={renderServiceItem}
        />
    );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 15,
        padding: 9,
        margin: 5,
        color: "white",
        borderColor:`#8b0000`,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor:`#8b0000`,
    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 5,

    },
    button: {
        marginHorizontal: 5,
    },
});

export default HorizontalTab;
