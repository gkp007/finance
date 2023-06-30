import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/images/screen1.png')} style={{ width: 300, height: 200 }} />
      </View>

      <View style={{ paddingHorizontal: 25 }}>
        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight: '800', color: 'darkred', marginBottom: 25, marginTop: 15 }}>Register</Text>


        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 15 }}>
        <Icon name={'email'} size={20}/>
          <TextInput placeholder="  E-mail" style={{ flex: 1, paddingVertical: 0 }} />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 15 }}>
        <FontAwesome5 name={'user-alt'} size={20}/>
          <TextInput placeholder="  User Name" style={{ flex: 1, paddingVertical: 0 }} />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 15 }}>
        <FontAwesome5 name={'lock'} size={20}/>
          <TextInput placeholder="   Password" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 50 }}>
        <FontAwesome5 name={'lock'} size={20}/>
          <TextInput placeholder="   Confirm Password" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('MainTabNavigator')} style={{ backgroundColor: 'darkred', padding: 10, borderRadius: 10, marginBottom: 20 }}>
          <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 20, color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 10 }}>Or, Sign up with ...</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}><FontAwesome5 name={'google'} size={30} color={'red'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}><FontAwesome5 name={'facebook'} size={30} color={'blue'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}><FontAwesome5 name={'github'} size={30} color={'black'}/></TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{ color: 'darkred', fontWeight: '700' }}>   Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  buttonStyle: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 7,
    margin: 5,
  },
};

export default RegisterScreen;
