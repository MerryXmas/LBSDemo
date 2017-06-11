'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  WebView,
  Text,
} from 'react-native';

class lwebview extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      url: this.props.url,
      isError: false,
    };
  }
  render() {
    return (
      <View style = {styles.container}>
        {
          this.state.isError?
            <View style = {styles.errInfo}>
               <Text style = {styles.text}>请检查网络或者域名</Text>
            </View>
          :
            <WebView 
              onError = {this._showError.bind(this)}
              startInLoadingState = {true}
              source = {{uri: this.state.url}} 
              style = {{marginTop:-20}}/>
        }
      </View>
    );
  }
  _showError(){
    this.setState({
      isError: true
    });
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  errInfo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 16,
  }
});



export default lwebview;