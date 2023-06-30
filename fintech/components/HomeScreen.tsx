import React from 'react';
import { Text, View } from 'react-native';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 20, color: 'black' }}>Home!</Text>
      </View>
    );
  }
export default HomeScreen