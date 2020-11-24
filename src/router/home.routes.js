import React from 'react';
import {Image, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
// import StoryScreen from '../screens/StoryScreen';
import logo from '../assets/images/logo.png';
import StoryScreen from '../screens/StoryScreen';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Instagram',

        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => (
          <View styles={{marginLeft: 10}}>
            <Feather name="camera" size={25} color={'black'} />
          </View>
        ),
        headerTitle: () => (
          <Image
            source={logo}
            resizeMode="contain"
            style={{width: 135, height: 50, marginLeft: 40}}
          />
        ),
        headerRight: () => (
          <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
        ),
      }}
    />

    {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
  </HomeStack.Navigator>
);

export default HomeRoutes;
