import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './components/OnboardingScreen';
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import StatisticScreen from './components/StatisticScreen';
import AddScreen from './components/AddScreen';
import MyCardScreen from './components/MyCardScreen';
import ProfileScreen from './components/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from "react-native-vector-icons/AntDesign"

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
    }} > 
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>  <AntIcon name="home" size={28} color = {focused ? "red": "black"} />
        }}
      />
      <Tab.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <AntIcon name="barschart" size={28} color = {focused ? "red": "black"}/>
        }}
      />
      <Tab.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
          <View
            style={{
              height:60,
              width:60,
              justifyContent:"center",
              alignItems:"center",
              backgroundColor:"darkslategrey" ,
              borderColor:"darkslategrey",
              borderWidth: 2,
              borderRadius: 30,
              top: -25,
              elevation:5
            }}>
          <AntIcon name="pluscircleo" size={28} color = {focused ? "black": "white"}/>
          </View>
          )
        }}
      />
      <Tab.Screen
        name="MyCardScreen"
        component={MyCardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => < Icon name="credit-card-outline" size={28} color = {focused ? "red": "black"}/>
        }}
      />
      <Tab.Screen
        name="ProfileScreen" component={ProfileScreen} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => < AntIcon name="user" size={28} color = {focused ? "red": "black"} />
        }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MainTabNavigator" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
