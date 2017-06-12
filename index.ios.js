/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TabBarIOS,
  Dimensions,
} from 'react-native';
import ToiletPage from './ios_views/toiletPage';
import ReadPage from './ios_views/read';
import WeatherPage from './ios_views/weather';
import SettingPage from './ios_views/setting';



export default class LBSDemo extends Component {

constructor(props) {
    super(props);
    this.state = { 
      selectedTab: 'read'
     };
  }
  
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title = "卫生间"
          selected = {this.state.selectedTab === 'toilet'}
          onPress={() => {
            this.setState({
              selectedTab: 'toilet'
            });
          }}
        >
          {this._readerView('toilet')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = "阅读"
          selected = {false}
          selected = {this.state.selectedTab === 'read'}
          onPress={() => {
            this.setState({
              selectedTab: 'read'
            });
          }}
        >
          {this._readerView('read')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = "天气"
          selected = {false}
          selected = {this.state.selectedTab === 'weather'}
          onPress={() => {
            this.setState({
              selectedTab: 'weather'
            });
          }}
        >
          {this._readerView('weather')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = "设置"
          selected = {false}
          selected = {this.state.selectedTab === 'setting'}
          onPress={() => {
            this.setState({
              selectedTab: 'setting'
            });
          }}
        >
          {this._readerView('setting')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  _readerView(moduleName){
    let view = <ToiletPage />;
    switch(moduleName){
      case 'toilet':
        view = <ToiletPage />;
        break;
      case 'read':
        view = <ReadPage />;
        break;
      case 'setting':
        view = <SettingPage />;
        break;
      case 'weather':
        view = <WeatherPage />;
        break;
      default:
        view = <ToiletPage />;
    }
    return view;
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  message: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  message_title:{
    fontSize: 18,
    color: '#18B5FF',
    marginBottom: 5,
  },
  list:{
    height: 30,
    fontSize: 15,
    marginLeft: 10,
    marginTop:10,
  },
});

AppRegistry.registerComponent('LBSDemo', () => LBSDemo);