import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Dimensions } from 'react-native';
import Customcarousel from '../components/Customcarousel';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalTab from './HorizontalTab';

const width = (Dimensions.get('screen').width - 16 * 3) / 2;

function HomeScreen() {
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
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.greetingText}>Good Morning!</Text>
          <Text style={styles.userName}>Gk Pattanaik</Text>
     
        </View>
        <Image source={require('../assets/images/gk.jpg')} style={styles.profileImage} />
        <View style={styles.badgeContainer}>
          <Badge value={3} status='error' />
        </View>
      </View>

      <View style={styles.carouselContainer}>
        <Customcarousel data={data} />
      </View>

      <View>
          <Text style={styles.headingText}>Our Services</Text>
          <HorizontalTab/>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.itemContainer}>
          <Icon name="home" size={30} color="black" />
          {/* Content for the first item */}
        </View>
        <View style={styles.itemContainer}>
          <Icon name="car" size={30} color="black" />
        </View>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.itemContainer}>
          <Icon name="camera" size={30} color="black" />
          {/* Content for the third item */}
        </View>
        <View style={styles.itemContainer}>
          {/* Content for the fourth item */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  greetingText: {
    fontSize: 18,
    color: 'grey',
    marginLeft: 17,
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'black',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 16,
  },
  badgeContainer: {
    position: 'absolute',
    right: 10,
  },
  carouselContainer: {
    flex: 1,
    top: 30,
  },
  containerRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    top: -30,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: 'lightgray',
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'red',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'black',
    top:20
  },
});

export default HomeScreen;
