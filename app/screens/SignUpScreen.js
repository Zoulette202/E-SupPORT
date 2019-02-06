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
      <View style={{flex:3}}>
        <KeyboardAwareScrollView behavior='padding' resetScrollToCoords={{ x: 0, y: 0 }} showsVerticalScrollIndicator={false} >
        <Text>{"\n"} </Text>
            <View style={{flex:1}}> 
              <Image style={{ height: 100, width: 200 }} source={require('../assets/images/Logo_1.png')}/>
              <Text style={{color:"black"}}>Prognosis, Streaming and Food</Text>
            </View>
            <Text>{"\n"} </Text>
            <TextInput placeholder="Last name" style={{borderWidth:1, width:200, height:30,margin:10, borderRadius:5}} />
            <TextInput placeholder="First name" style={{borderWidth:1, width:200, height:30,margin:10, borderRadius:5}} />
            <TextInput placeholder="Nickname" style={{borderWidth:1, width:200, height:30,margin:10, borderRadius:5}} />
            <TextInput placeholder="Phone number" style={{borderWidth:1, width:200, height:30,margin:10, borderRadius:5}} keyboardType="number-pad" />
            <TextInput placeholder="Email" style={{borderWidth:1, width:200, height:30,margin:10, borderRadius:5}} keyboardType="email-address" />
            <TextInput placeholder="Password" style={{borderWidth:1, width:200, height:30,margin:10, borderRadius:5}} secureTextEntry={true} />

            <View style={{justifyContent:"center", alignItems:'center' }}>
              <TouchableOpacity onPress={this.signupOk} style={{width:100 , borderRadius:10, borderColor: 'black', borderWidth:1, alignItems:"center",backgroundColor:"#636e72"}}>
                <Text style={{color:'white', alignItems:"center", fontSize: 20}}>Sign up</Text>
              </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
        </View>
        </View>
    )
  }


  signupOk = () =>{
    this.props.navigation.navigate("SignUpOk")
  }
}