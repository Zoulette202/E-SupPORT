/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer  from './app/navigation/AppNavigator.js'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//<Text style={styles.welcome}>Welcome to React Native!</Text>
     //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //  <Text style={styles.instructions}>{instructions}</Text>
export default class App extends Component {

  s

  render() {
  //  const Layout = createRootNavigator(this.state.signedIn);

    return (
      <AppContainer  ref={nav => {
        this.navigator = nav;
      }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
