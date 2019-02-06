import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { ListItem } from 'react-native-elements'




export default class FoodScreen extends React.Component {
  static navigationOptions = {
    title:'Food'
   }


  pressed =() =>{
    alert('cliquer')
  }

  goDetailPage =(item) =>{
    this.props.navigation.push('Detail', {food : item})
  }

  render() {

    const list = [
      {
        title: 'Burger steak Menu',
        icon: require('../assets/icons/burger.png'),
        price:13,
        description : "It's a menu composed of a one steak burger with french fries and a drink"
      },
      {
        title: 'Pizza Oriental Menu',
        icon: require('../assets/icons/pizza-slice.png'),
        price:9,
        description : "It's a menu composed of one slice of an oriental pizza (hot sausages) with chicken pieces (nuggets or tenders) and a drink"
      },
      {
        title: 'Pizza Margherita Menu',
        icon: require('../assets/icons/pizza-slice.png'),
        price :9,
        description : "It's a menu composed of one slice of an margherita pizza with chicken pieces (nuggets or tenders) and a drink"
      },
      {
        title: 'Pizza Calzone Menu',
        icon: require('../assets/icons/pizza-slice.png'),
        price: 11,
        description : "It's a menu composed of one slice of an calzone pizza with chicken pieces (nuggets or tenders) and a drink"
      },
      {
        title: 'BigMac steak Menu',
        icon: require('../assets/icons/burger.png'),
        price: 14,
        description : "It's a menu composed of a two steak burger with french fries and a drink"      },
      {
        title: 'Chicken Panini Menu',
        icon: require('../assets/icons/sandwich.png'),
        price:8,
        description : "It's a menu composed of a one chicken Panini with french fries and a drink"
      },
      {
        title: 'Classic Panini Menu',
        icon: require('../assets/icons/sandwich.png'),
        price:8,
        description : "It's a menu composed of a one classic Panini with french fries and a drink"
      },
      {
        title: 'Cheese Panini Menu',
        icon: require('../assets/icons/sandwich.png'),
        price:8,
        description : "It's a menu composed of a one cheese Panini with french fries and a drink"
      }
    ]
    
    
    return (
     <ScrollView style={{ flex:1, 
     backgroundColor: 'white',
     flexDirection: 'column'}}
     >
       {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        subtitle={item.price + "€"}
        leftAvatar={{ source : item.icon}}
        chevron={true}
        onPress={() => this.goDetailPage(item)}
      />
    ))
  }
     </ScrollView>
    )
  }
}