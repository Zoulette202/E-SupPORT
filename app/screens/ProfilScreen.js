import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';


export default class ProfilScreen extends React.Component{
    static navigationOptions = {
        title:'Profile'
       }
    
    
    
    render(){
        const items = [
            { name: 'Loss', code: '#c0392b' , team1:"Fnatic", team2:"Cloud9", score1:1, score2:2, icon1:0 , icon2 :1 ,choice1:true, choice2:false, type : "loss"},
            { name: 'Win', code: '#2ecc71' , team1:"MYM", team2:"SKT1", score1:2, score2:0,  icon1:2 , icon2 :6 ,choice1:true, choice2:false,type : "win"},
            { name: 'Loss', code: '#c0392b' , team1:"OG", team2:"Team WE",score1:2,score2:1, icon1:4 , icon2 :5 ,choice1:false, choice2:true, type : "loss"},
            { name: 'Loss', code: '#c0392b' , team1:"Fnatic", team2:"Cloud9", score1:1, score2:2, icon1:0 , icon2 :1 ,choice1:true, choice2:false, type : "loss"},
            { name: 'Win', code: '#2ecc71' , team1:"MYM", team2:"SKT1", score1:2, score2:0,  icon1:2 , icon2 :6 ,choice1:true, choice2:false,type : "win"},
            { name: 'Loss', code: '#c0392b' , team1:"OG", team2:"Team WE",score1:2,score2:1, icon1:4 , icon2 :5 ,choice1:false, choice2:true, type : "loss"},{ name: 'Loss', code: '#c0392b' , team1:"Fnatic", team2:"Cloud9", score1:1, score2:2, icon1:0 , icon2 :1 ,choice1:true, choice2:false, type : "loss"},
            { name: 'Win', code: '#2ecc71' , team1:"MYM", team2:"SKT1", score1:2, score2:0,  icon1:2 , icon2 :6 ,choice1:true, choice2:false,type : "win"},
            { name: 'Loss', code: '#c0392b' , team1:"OG", team2:"Team WE",score1:2,score2:1, icon1:4 , icon2 :5 ,choice1:false, choice2:true, type : "loss"},
        ]
        return(
            <View style={{ flex:1,flexDirection: 'column' }}>
           

            <View style={{flex:0.4, justifyContent: 'center',alignItems: 'center', flexDirection:'column', backgroundColor: '#636e72'}}>
            
                <View  >
                    <Image source={require('../assets/icons/user.png')} style={{width:100,height:100,borderWidth : 3, borderColor:"green", borderRadius:50}}/>
                </View>
                <View>
                    <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{'My Profil name'}</Text>
                </View>
                
            </View>

            <ScrollView style={{flex:0.7,flexDirection:'column'}}>
                <View style={{flex:0.1, justifyContent: 'center',alignItems: 'center'}}> 
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"My information"}</Text>
                </View>
                <View style={{flex:0.5, borderBottomWidth:2}}>
                    <View style={{ marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Name"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{"Your Name"}</Text>  
                    </View>
                    <View style={{ marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Email"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{"Your Email"}</Text>  
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Phone"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{"Your phone number"}</Text>  
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Points"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{"Your points"}</Text>  
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:10}}> 
                        <TouchableOpacity style={{width:100 , borderRadius:10, borderColor: 'black', borderWidth:1, alignItems:"center",backgroundColor:"#636e72"}}>
                            <Text style={{color:'white', alignItems:"center", fontSize: 20}}>
                                {"Modify"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:0.5, justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"My Last bets"}</Text>
                </View>
                <View style={{ borderBottomWidth:2}}>
                    <SectionGrid
                        itemDimension={90}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        sections={[
                            {
                            title: 'Your three last bets',
                            data: items
                            }
                        ]}
                        horizontal={true}
                        style={styles.gridView}
                        renderItem={({ item, section, index }) => (
                            <TouchableOpacity onPress={ () => {this.navigateDetail(item)}}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.team1 + " vs " + item.team2}</Text>
                            <Text style={styles.itemCode}>{item.name}</Text>
                            </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
           
        </View>
        )
    }

    navigateDetail = (item) =>{
        this.props.navigation.push('MatchDetail', {item : item})
      }
}

const styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    sectionHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#636e72',
      color: 'white',
      padding: 10,
    },
  });