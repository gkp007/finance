import React from 'react';
import { Text, View } from 'react-native';

function MyCardScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 20, color: 'black' }}>MyCardScreen!</Text>
      </View>
    );
  }
export default MyCardScreen