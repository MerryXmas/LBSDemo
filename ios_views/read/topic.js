'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Util from './../util';

class topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    var views = [];
    var data = this.state.data;
    for(var i in data){
      views.push(
        <View style = {styles.img_item} key = {i}>
            <Image resizeMode = 'cover' style = {styles.img} source = {{uri: data[i].img}}></Image>
        </View>
      );
    }
    return (
       <View style = {styles.container}>
        <View>
          <Text style= {styles.text_1}>推荐专题</Text>
        </View>

        <View style = {styles.img_container}>
          {views}
        </View>
        
        <View style = {styles.text_2}>
          <Text>查看更多同期专题&gt;</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
  },
  img:{
    width: (Util.size.width - 30) / 2 ,
    height: 80,
    borderRadius: 5,
  },
  img_container:{
    flexDirection: 'row',
  },
  img_item:{
    flex: 1,
  },
  text_1:{
    color: '#5E5E5E',
    marginBottom: 8,
    fontSize: 16,
  },
  text_2:{
    color: '#ccc',
    marginTop: 10,
    fontSize: 13,
    fontWeight: '300',
    marginBottom: 10,
  },
	
});


export default topic;