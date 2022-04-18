import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import screens from '../screens';
import { TabBar } from '../components';
import { colors } from '../styles';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          headerStyle: { backgroundColor: colors.main },
          headerTitleStyle: { color: colors.grayscale[0] },
          cardStyle: { backgroundColor: colors.main },
        }}
        component={screens.Home}
      />
      <Tab.Screen name="Music" component={screens.Home} />
      <Tab.Screen name="Profile" component={screens.Home} />
    </Tab.Navigator>
  );
};

// --------------------------------------------------------

const RootStackNav = createStackNavigator();
const RootStack = () => {
  return (
    <RootStackNav.Navigator initialRouteName="Main">
      <RootStackNav.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={TabStack}
      />
    </RootStackNav.Navigator>
  );
};

// --------------------------------------------------------

export default RootStack;
