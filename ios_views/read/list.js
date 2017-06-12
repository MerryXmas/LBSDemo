'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Util from './../util';

class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url
    };
  }
  render() {
    return (
      <View>
        <View style = {styles.item}>
          <Image source={{uri: ''}}/>
        </View>
        <View>
          <Text>标题</Text>
          <Text>2016-07-31</Text>
        </View>
      </View>
    );
  }
  componentDidMount(){
    let url = this.state.url;
    Util.get(url, function(data){
      console.log(data)
    }, function(err){

    });
  }
}

const styles = StyleSheet.create({
	item:{
    height: 78,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: Util.pixel
  },
});


export default list;