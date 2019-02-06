import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen.js';
import SignUpScreen from '../screens/SignUpScreen.js';
import SignUpOkScreen from '../screens/SignUpOkScreen';
const headeStyle = {
    margintop: Platform.OS ==='android' ? StatusBar.currentHeight : 0
};

 const LoginStack = createStackNavigator({
    Login:{
        screen: LoginScreen,
    navigationOptions: {
        header:null
    }
    }
  });

   const SignUpStack = createStackNavigator({
    SignUpPage:{ 
        screen : SignUpScreen,
    navigationOptions : {
        header : null
    }},
    SignUpOk :{ 
        screen : SignUpOkScreen,
    navigationOptions : {
        header : null
    }}
  });

  export default createStackNavigator({
      SignIn : LoginStack,
      SignUp : SignUpStack
  });




