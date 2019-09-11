import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OSInfo from '../screens/OsInfoScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TransOSScreen from '../screens/TransOSScreen';

const config = {
  headerLayoutPreset: "center",
  headerBackTitleVisible: false,
  defaultNavigationOptions: {
    headerTintColor: "#f2f2f2",
    headerStyle: {
      backgroundColor: "#0059b3",
    },
  }
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    OSInfo: OSInfo,
    TransOSScreen: TransOSScreen
  },
  {
    headerLayoutPreset: "center",
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerTintColor: "#f2f2f2",
      headerStyle: {
        backgroundColor: "#0059b3",
      },
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : `md-information-circle${focused ? '': '-outline'}`
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Configuração',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  //LinksStack,
  SettingsStack,
},{
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    inactiveTintColor: '#a6a6a6',
    style:{
      shadowColor: 'rgba(58,55,55,0.1)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 15,
      elevation: 3,
      borderTopColor: 'transparent',
      backgroundColor:'#0059b3',
      height: 50
    },
    activeTabStyle: {
      backgroundColor: '#3385ff',
      borderBottomWidth: 4,
      borderColor: '#f2f2f2'
    }
  },
});

tabNavigator.path = '';

export default tabNavigator;
