import { View, Text, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";
import Home from './Home';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        style={{
          width: 8,
          height: 8,
          marginHorizontal: 4,
          borderRadius: 4,
          backgroundColor: selected ? 'red' : '#f87171',
        }}
      />
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
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
