
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import LoopScreen from './tabs/LoopScreen';
import TrajetScreen from './tabs/TrajetScreen';
import Home from './tabs/Home';

const Tabs = TabNavigator(
    {   Home: { screen: Home },
        LoopScreen: {screen: LoopScreen,},
        TrajetScreen: { screen: TrajetScreen },
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          height: 2,
          backgroundColor: '#06e8ac'
        },
        style: {
          backgroundColor: "#ffffff",
          borderWidth: 1,
          borderColor: '#3f101c',
        }
      }
    })
  
  
  export default class MainScreenNavigator extends Component {
    render() {
      return (
        <Tabs />
      );
    }
  }
