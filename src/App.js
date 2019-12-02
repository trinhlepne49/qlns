/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { LoginScreen, ListUsers, ListXinPhep, FormXinPhep } from "./screens"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Maintab = createBottomTabNavigator({
  Home: ListXinPhep,
  Settings: ListUsers,
});

const AppNavigator = createStackNavigator({
  // Maintab,
  Login: {
    screen: LoginScreen,
    //   navigationOptions: {
    //     header: null,
    // },
  },
  List:{
    screen: ListUsers,
  },
  XinPhep:{
    screen: ListXinPhep
  },
  formXinPhep:{
    screen: FormXinPhep
  }

});

export default createAppContainer(AppNavigator);