'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Util from './../util';
import List from './list';

class category extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: props.data,
      navigator: props.navigator,
    };
    console.log('aaa-----test',props.test);
  }
  render() {
    let data = this.state.data;
    let views_1 = [];
    let views_2 = [];
    for(var i in data){
      let item = (
        <View style = {styles.row_item} key = {i}>
              <TouchableOpacity style = {styles.item} onPress = {this._goToList.bind(this, data[i].text)}>
                <Text style = {styles.font}>{data[i].text}</Text>
              </TouchableOpacity>
        </View>
      );
      if(i < 2){
        views_1.push(item);
      }else{
        views_2.push(item);
      }
    }
    return (
       <View style = {[styles.container, {paddingTop: 10}]}>
          <Text style = {styles.text_1}>
            分类
          </Text>
          <View style = {styles.row}>
            {views_1}
          </View>

          <View style = {styles.row}>
            {views_2} 
          </View>
        </View>
    );
  }
  _goToList(name){
    let type = this._getType(name);
    let url = 'http://123.57.39.116:3000/data/read?type=' + type;
    this.props.navigator.push({
      component: List,
      title: name,
      barTintColor: '#fff',
      passProps:{
        url: url,
      }
    })
  }

  _getType(name){
    let type = 'it';
    switch(name){
      case '互联网':
        type = 'it';
        break;
      case '笑话':
        type = 'cookies';
        break;
      case '管理':
        type = 'manager';
        break;
      case '散文':
        type = 'sanwen';
        break;
      default:
        type = 'it';
    }
    return type;
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
	text_1:{
    color: '#5E5E5E',
    marginBottom: 8,
    fontSize: 16,
  },
  row:{
    flexDirection: 'row',
    marginTop: 5,
  },
  item:{
    height: 81,
    width: (Util.size.width - 50) / 2,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  row_item:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font:{
    color: '#707070',
    fontSize: 17,
  }
});

export default category;