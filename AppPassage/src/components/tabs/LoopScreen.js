import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Fonts } from './../../utils/Fonts';
export default class LoopScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({focused,tintColor})=>(
        focused ? <Image
        source={require('./../../icons/search_green_icon.imageset/search_green_icon.png') }
          style={{width:30, height: 30}}
      />
     :
     <Image
       source={require('./../../icons/searchIcon/search_icon.png')}
    style={{width:30, height: 30}}
     />

   ),
  };
  render() {
    return (
      <View style = {styles.container}>
        <Text style= {styles.textStyle}>Hello Fello</Text>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  textStyle: {
    fontSize: 20,
    fontFamily: Fonts.Avenir,
  },
});