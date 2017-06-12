'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import Util from './../util'

class search extends Component {
  render() {
    return (
       <View style = {styles.container}>
        <TextInput style = {styles.search_input} placeholder = "搜索" placeholderTextColor = "#5E6877">
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search_input: {
    height: 35,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: '#EEEEEE',
    borderRadius: 3,
    fontSize: 15,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  }
});

export default search;