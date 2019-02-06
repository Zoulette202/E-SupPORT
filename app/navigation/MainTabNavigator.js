import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import Prognonsiscreen from '../screens/PrognosisScreen'
import StreamingScreen from '../screens/StreamingScreen'
import FoodScreen from '../screens/FoodScreen'
import MatchDetailScreen from '../screens/MatchDetailScreen'
import ProfilScreen from '../screens/ProfilScreen'
import DetailFood from '../screens/DetailFoodScreen'



const HomeStack = createStackNavigator({
    Home : HomeScreen,
    MatchDetail : MatchDetailScreen
})
HomeStack.navigationOptions = {
    tabBarLabel: 'Prognosis',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/payment.png')}
      />),
  };

const ProfilStack = createStackNavigator({
    Profil : ProfilScreen,
    MatchDetail : MatchDetailScreen
})
ProfilStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/user.png')}
      />),
  };

const StreamingStack = createStackNavigator({
    Stream : StreamingScreen
})
StreamingStack.navigationOptions = {
    tabBarLabel: 'Streaming',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/joystick.png')}
      />),
  };

const FoodStack = createStackNavigator({
    Food : FoodScreen,
    Detail : DetailFood
})

FoodStack.navigationOptions = {
    tabBarLabel: 'Food',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/restaurant.png')}
      />),
  };
  

export default createBottomTabNavigator({
    Home : HomeStack,
    Stream : StreamingStack,
    Food : FoodStack,
    Profile : ProfilStack

  });