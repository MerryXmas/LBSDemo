'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Util from './../util';

class recommend extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: props.name,
      data: props.data
    };
  }
  render() {
    var data = this.state.data;
    var views_1 = [];
    var views_2 = [];
    for(var i in data){
      let item = (
          <View style = {styles.img_item} key = {i}>
            <Image style = {[styles.img, styles.shadow]} source={{uri: data[i].img}}/>
            <Text style = {styles.title} numberOfLines = {2}>{data[i].title}</Text>
          </View>);
      if(i < 4 ){
        views_1.push(item);
      }else{
        views_2.push(item);
      }
    }
    return (
      <View style = {styles.container}>
        <View>
          <Text style = {[styles.text_1, styles.title_top]}>{this.state.name}</Text>
        </View>

        <View style = {styles.img_view}>
          {views_1}
        </View>

        <View style = {styles.img_view}>
           {views_2}
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
	img_view: {
    flexDirection: 'row',
  },
  img_item:{
    flex: 1,
    height: 158,
  },
  shadow:{
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset:{width: 1*Util.pixel, height: Util.pixel}
  },
  img:{
    height: 120,
    width: (Util.size.width - 40) / 4
  },
  text_1:{
    color: '#5E5E5E',
    marginBottom: 8,
    fontSize: 16,
  },
  title_top:{
    marginTop:10,
  },
  title:{
    marginTop: 4,
    fontSize: 13,
    color: '#818181',
  }
});


export default recommend;