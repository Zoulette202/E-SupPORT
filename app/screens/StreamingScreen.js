import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  WebView
} from 'react-native';

export default class StreamingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <WebView
        startInLoadingState={true}
        useWebKit={true}
        source={{uri: 'https://www.twitch.tv/krlann'}}
        style={{marginTop : 20}}
      />
    )
  }
}