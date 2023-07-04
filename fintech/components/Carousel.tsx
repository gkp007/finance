import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import Customcarousel from './Customcarousel'

const  Carousel = () => {
    const data = [
        {
            image: require('../assets/images/1.jpg'),
        },
        {
            image: require('../assets/images/2.jpg'),
        },
        {
            image: require('../assets/images/3.jpg'),
        },
        {
            image: require('../assets/images/4.jpg'),
        },
        {
            image: require('../assets/images/5.jpg'),
        },
        {
            image: require('../assets/images/6.jpg'),
        },
    ]

    return (
        <SafeAreaView style={style.container}>
            <Customcarousel data = {data}/>
        </SafeAreaView>
    )
}
export default Carousel;

const style = StyleSheet.create({
    container: {
        backgroundColor:'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0,
    },
})