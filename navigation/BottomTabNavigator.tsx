import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {
  TouchableHighlight,
  AsyncStorage,
  Text
} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList, HomeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: '#fff', activeBackgroundColor: '#0059b3' }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: () => <Text style={{fontSize: 19, color: '#fff'}}>Serviços</Text>,
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={`ios-information-circle${focused ? '' : '-outline'}`} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator({navigation}) {
  const Logout = React.useCallback(async () => {
    await AsyncStorage.clear();
    navigation.navigate('LoginScreen');
   }, []);
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: true, headerLeft: undefined }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: 'Home', 
          headerStyle: {
            backgroundColor: '#0059b3'
          },
          headerTintColor: '#fff',
          headerLeft: null,
          headerRight: () => (
            <TouchableHighlight onPress={Logout} style={{paddingRight: 15}}>
              <TabBarIcon name="ios-log-out" color="white" />
            </TouchableHighlight>
        )}}
      />
    </HomeStack.Navigator>
  );
}


