
import { Platform, StatusBar, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { TextInput, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Avatar, Badge, withBadge } from 'react-native-elements'
import { BounceInLeft } from 'react-native-reanimated';
import Customcarousel from '../components/Customcarousel'

const width = (Dimensions.get("screen").width - 16 * 3) / 2;

function HomeScreen()  {
    const data = [
      
      {
          image: require('../assets/images/card1.jpg'),
      },
      {
          image: require('../assets/images/card2.png'),
      },
      {
          image: require('../assets/images/card3.png'),
      },
      {
          image: require('../assets/images/card4.png'),
      },
     
  ]
    return (
      <SafeAreaView style = {style.container}>
        <View >
                <View>
                    <Text style={{ fontSize: 18, color: "grey", marginLeft: 15 }}>Good Morning!</Text>
                    <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: 15, color: "black", }}>Gk Pattanaik</Text>
                </View>
                <Image source={require('../assets/images/gk.jpg')}
                    style={{ height: 60, width: 60, borderRadius: 30, left: 330, top: -50 }} />
                <Badge
                    value={3}
                    status='error'
                    containerStyle={{ position: "absolute", right: 16, top: 12 }} />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    top: -30
                }}>
                   
            </View>
      <Customcarousel data={data}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 20, color: 'black' }}>Home!</Text>
      </View>
    </SafeAreaView>
    );
  }

  
export default HomeScreen

const style = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight:0,
  },
})