import PropTypes from 'prop-types'
import React from 'react'
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity, 
    Alert,
    Image
  } from 'react-native';
  import CheckBox from 'react-native-check-box'



export default class MatchDetailScreen extends React.Component{
    static navigationOptions = {
       title:'Match Details'
      }
    
    state = {
        choice1 : false,
        choice2 : false,
    }
    

    componentWillMount (){
        const { navigation } = this.props
        const item = navigation.getParam('item')

        this.setState({
            choice1 : item.choice1,
            choice2 : item.choice2
        })
    }

    render(){
        const { navigation } = this.props
        const item = navigation.getParam('item')
        const color = item.code
        const images = [
            fnatic = require('../assets/icons/fnatic.png'),
            cloud9 = require('../assets/icons/cloud9.jpg'),
            mym = require('../assets/icons/mym.jpg'),
            edwardgaming = require('../assets/icons/edwardgaming.png'),
            og = require('../assets/icons/og.png'),
            teamwe = require('../assets/icons/teamwe.png'),
            skt1 = require('../assets/icons/skt1.png')
        ]
        


        
        return(
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor: color,flexDirection: 'column' }}>
                <View style={{flex:0.5, justifyContent: 'center',alignItems: 'center', flexDirection:'column'}}> 
                 <View style={{justifyContent: 'center',alignItems: 'center', flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}} >
                        <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}> {item.team1 }</Text>
                    </View>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                    </View>

                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{item.team2}</Text>
                    </View>
                </View>
                </View>
               

                <View style={{flex:1, justifyContent: 'center',alignItems: 'center', flexDirection:'column', borderWidth: 1, backgroundColor: 'black'}}>
                <View style={{flex:1, justifyContent: 'center',alignItems: 'center', flexDirection:'row', margin:20}}>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}} >
                    <Image style={{ height: 100, width: 100 }} source={images[item.icon1]}/>

                    </View>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{'VS'}</Text>
                    </View>

                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                    <Image style={{ height: 100, width: 100 }} source={images[item.icon2]}/>
                    </View>
                </View>
                <View style={{flex:1, justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
                   <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{item.score1}</Text>
                   </View>

                   <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{'-'}</Text>
                   </View>


                   <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{item.score2}</Text>
                   </View>

                </View>
                </View>
                
                <View style={{flex:0.5, justifyContent: 'center',alignItems: 'center', flexDirection:'column'}}>
                <View style={{flex:1, justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
                   <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                   <CheckBox
                        style={{flex: 1, padding: 10}}
                        isChecked={this.state.choice1}
                        leftText={"CheckBox"}
                        onClick={()=>{
                            this.setState({
                                choice2: this.state.choice1,
                                choice1 : !this.state.choice1
                            })
                          }}
                          disabled={(item.type != "undetermined") ? true : false}
                    />
                   </View>

                   <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                        
                   </View>


                   <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                   <CheckBox
                        style={{flex: 1, padding: 10}}
                        isChecked={this.state.choice2}
                        leftText={"CheckBox"}
                        onClick={()=>{
                            this.setState({
                                choice1 : this.state.choice2,
                                choice2 : !this.state.choice2
                            })
                          }}
                          disabled={(item.type != "undetermined") ? true : false}

                    />
                   </View>

                </View>
                </View>
                
                <TouchableOpacity disabled={(item.type !="undetermined") ? true : false} style={{width: 100,margin:10, borderRadius:10, borderColor: 'black', borderWidth:1, alignItems:"center",backgroundColor:"#636e72"}}>
                     <Text style={{color:'white', alignItems:"center", fontSize: 20}}>Vote</Text>
                </TouchableOpacity>

            </View>
        )
    }
}