'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  WebView,
} from 'react-native';

import LwebView from './lwebview'
import Util from './util'

class toiletPage extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <LwebView url = "http://123.57.39.116:3000/html/nearby.html"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	text:{
		fontSize: 60
	},
  container:{
    flex: 1,
  }
});


export default toiletPage;