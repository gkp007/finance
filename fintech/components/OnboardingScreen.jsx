import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen'


const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => (
    <View
      style={{
        width: 9,
        height: 9,
        marginHorizontal: 4,
        borderRadius: 4,
        backgroundColor: selected ? 'red' : '#f87171',
      }}
    />
  );

  const ButtonComponent = ({ onPress, text }) => (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: 'darkred',
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 4,
          elevation: 6,
          margin: 12,
        }}
      >
        <Text style={{ color: 'white' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  const NextButtonComponent = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor: 'darkred',
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 4,
          elevation: 6,
          margin: 12,
          }}
        >
          <Text style={{ color: 'white' }}>Next</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Onboarding
      DotComponent={DotComponent}
      SkipButtonComponent={() => <ButtonComponent onPress={() => navigation.navigate("RegisterScreen")} text="Skip" />}
      DoneButtonComponent={() => <ButtonComponent onPress={() => navigation.navigate("RegisterScreen")} text="Done" />}
      NextButtonComponent={NextButtonComponent}
      bottomBarColor={"white"}
      pages={[
        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          image: <Image source={require('../assets/images/screen1.png')} style={{ width: 200, height: 200 }} />,
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/screen2.png')} style={{ width: 200, height: 200 }} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/screen3.png')} style={{ width: 200, height: 200 }} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};
export default OnboardingScreen;