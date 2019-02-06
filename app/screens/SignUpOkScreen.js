import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor: 'white',flexDirection: 'column',}}>
        
        <Text>{"\n"} </Text>
            <View style={{flex:0.5}}> 
              <Image style={{ height: 100, width: 200 }} source={require('../assets/images/Logo_1.png')}/>
              <Text style={{color:"black"}}>Prognosis, Streaming and Food</Text>
            </View>
            <View style={{flex:0.5}}> 
            <Text style={{fontWeight:"bold"}}> Your account has been created, you can log into the application now</Text>
            </View>
      </View>
    )
  }
}