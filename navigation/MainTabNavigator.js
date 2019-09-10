import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OSInfo from '../screens/OsInfoScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
    OSInfo: OSInfo
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
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  //LinksStack,
  //SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
