import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Connected from './MainTabNavigator';
import NotConnected from './SignedOutNavigator';
import LoginScreen from '../screens/LoginScreen'


 const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
    SignedIn: 
    {
      screen: Connected
    },
  SignedOut:{
    screen : NotConnected
  }},
  {initialRouteName: signedIn ? "SignedIn" : "SignedOut"});
};

const AppContainer = createAppContainer( createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  SignedIn: Connected,
  SignedOut:NotConnected,
  Begin : LoginScreen
  
},{
    initialRouteName: 'Begin',
  }));
  export default AppContainer;