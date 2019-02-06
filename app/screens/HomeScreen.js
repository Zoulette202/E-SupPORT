import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const items = [
      { name: 'Loss', code: '#c0392b' , team1:"Fnatic", team2:"Cloud9", score1:1, score2:2, icon1:0 , icon2 :1 ,choice1:true, choice2:false, type : "loss"},
      { name: 'Win', code: '#2ecc71' , team1:"MYM", team2:"SKT1", score1:2, score2:0,  icon1:2 , icon2 :6 ,choice1:true, choice2:false,type : "win"},
      { name: 'Loss', code: '#c0392b' , team1:"OG", team2:"Team WE",score1:2,score2:1, icon1:4 , icon2 :5 ,choice1:false, choice2:true, type : "loss"},
      { name: 'AMETHYST', code: '#9b59b6', team1:"Fnatic" ,team2:"Cloud9",score1:1,score2:2,  icon1:0, icon2 :1 ,choice1:false, choice2:false, type : "loss"},
      { name: 'WET ASPHALT', code: '#34495e', team1:"Fnatic",team2:"Cloud9",score1:1,score2:2, icon1:0 , icon2 :1 ,choice1:false, choice2:false,  type : "loss"},
      { name: 'GREEN SEA', code: '#16a085', team1:"Fnatic",team2:"Cloud9", score1:0, score2:0, icon1:0 , icon2 :1 ,choice1:false, choice2:false,  type : 'undetermined'  },
      { name: '1:05:45', code: '#2980b9' , team1:"Edward Gaming",team2:"Cloud9", score1:0, score2:0,  icon1:3 , icon2 :1 ,choice1:false, choice2:false, type : "undetermined" },
      { name: '1:55:45', code: '#2980b9', team1:"Fnatic"  , team2:"SKT1", score1:0, score2:0,  icon1:0 , icon2 :6 ,choice1:false, choice2:false, type : "undetermined"},
      { name: '2:35:45', code: '#2980b9' , team1:"OG", team2:"Edward Gaming", score1:0, score2:0,  icon1:4, icon2 :3 ,choice1:false, choice2:false, type : "undetermined"},
      { name: '3:05:45', code: '#2980b9' , team1:"MYM" , team2:"Team WE", score1:0, score2:0,  icon1:2 , icon2 :5 ,choice1:false, choice2:false, type : "undetermined"},
      { name: 'Tomorow', code: '#2980b9' , team1:"SKT1", team2:"Cloud9", score1:0, score2:0,  icon1:6 , icon2 :1 , choice1:false, choice2:false, type : "undetermined" },
      { name: 'Sunday', code: '#2980b9' , team1:"Fnatic", team2:"OG", score1:0, score2:0,  icon1:0 , icon2 :4 ,choice1:false, choice2:false,  type : "undetermined" },
      { name: '', code: '#2980b9' , team1:"Fnatic", team2:"Cloud9", type : "loss" },
      { name: '', code: '#2980b9' , team1:"Fnatic" , team2:"Cloud9", type : "loss"},
      { name: 'CONCRETE', code: '#95a5a6' , match:"Fnatic vs Cloud9" },
      { name: 'ORANGE', code: '#f39c12' , match:"Fnatic vs Cloud9" },
      { name: 'PUMPKIN', code: '#d35400' , match:"Fnatic vs Cloud9" },
      { name: 'POMEGRANATE', code: '#c0392b' , match:"Fnatic vs Cloud9" },
      { name: 'SILVER', code: '#bdc3c7', match:"Fnatic vs Cloud9"  },
      { name: 'ASBESTOS', code: '#7f8c8d' , match:"Fnatic vs Cloud9" },
    ];
    return (
      <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Your three last prognosis',
          data: items.slice(0, 3),
        },
        {
          title: 'Upcoming matches',
          data: items.slice(6, 12),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableOpacity onPress={ () => {this.navigateDetail(item)}}>
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.team1 + " vs " + item.team2}</Text>
          <Text style={styles.itemCode}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
    
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