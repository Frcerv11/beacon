import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import WelcomeScreen from '../screens/WelcomeScreen';
import AssistScreen from '../screens/AssistScreen';
import UrgencyScreen from '../screens/UrgencyScreen';
import FormScreen from '../screens/FormScreen';
import MapScreen from '../screens/MapScreen';
import SummaryScreen from '../screens/SummaryScreen';
const Stack = StackNavigator({
  
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
      headerLeft: null,
    },
  },
  AssistScreen: {
    screen: AssistScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Request Help',
      headerLeft: null,
    }),
  },
  UrgencyScreen: {
    screen: UrgencyScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Urgency Level',
      headerLeft: null,
    }),
  },
  FormScreen: {
    screen: FormScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Information',
      headerLeft: null,
    }),
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Confirm Location',
      headerLeft: null,
    }),
  },
  SummaryScreen: {
    screen: SummaryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Summary',
      headerLeft: null,
    }),
  },
});

export const Root = StackNavigator({ 
 
  Stack:{
    screen:Stack,
    
  },
},{
  mode:'modal',
  headerMode:'none'
});