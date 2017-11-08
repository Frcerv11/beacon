/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Map from './screens/Map';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Map/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    width: '100%', 
    justifyContent: "flex-end", 
    alignItems: "center",
  },
});







