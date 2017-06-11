'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class toiletPage extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.text}>
          设置
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	text:{
		fontSize: 60
	},
});


export default toiletPage;