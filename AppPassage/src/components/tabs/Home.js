import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Home extends Component {
  static navigationOptions = {
     tabBarIcon: () => (<Image source={require('../icons/home_icon.imageset/home_icon.png')}/>)
  };
  render() {
    return (
      <View style = {styles.container}>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});