'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  NavigatorIOS,
} from 'react-native';

import Category from './read/category';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic'
import Util from './util'

class Hr extends Component{
  render(){
    return (
      <View>
        <View style = {styles.hr}></View>
      </View>
    );
  }
}

class readView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isShow: false
    };
  }
  render() {
    return (
      <View style = {styles.container}>
        <Search/>
        <Hr/>
        {
          this.state.isShow?
            <ScrollView style = {styles.container}>
              <Topic data = {this.state.recommendTopic}/>
              <Hr/>
              <Recommend name = "热门推荐" data = {this.state.hotTopic}/>
              <Hr/>
              <Category data = {this.state.category} navigator = {this.props.navigator} test = {this.props.test} />
              <Hr/>
              <Recommend name = "清新一刻" data = {this.state.other}/>
              <View style = {{height: 55}}></View>
            </ScrollView>
          :null
        }
      </View>
    );
  }
  componentDidMount(){
    var that = this;
    Util.get('http://123.57.39.116:3000/data/read?type=config', function(data){
      if(data.status === 1){
        let obj = data.data;
        let hotTopic = obj.hotTopic;
        let recommendTopic = obj.recommendTopic;
        let other = obj.other;
        let category = obj.category;
        that.setState({
          isShow: true,
          recommendTopic: recommendTopic,
          hotTopic: hotTopic,
          other: other,
          category: category,
        });
      }else{

      }
    }, function(err){

    });
  }
}

class read extends Component{
  render(){
    return (
      <NavigatorIOS
        initialRoute ={{
          component: readView,
          title: '阅读',
          navigationBarHidden: true,
          passProps:{
            test: 'aaa'
          }
        }}
        style = {{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  hr:{
    borderColor:'#F0F0F0',
    borderWidth: 1,
    marginTop: 10,
  },
});


export default read;