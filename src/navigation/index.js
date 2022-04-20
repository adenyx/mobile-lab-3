import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSelector } from 'react-redux';

import screens from '../screens';
import { TabBar } from '../components';
import { colors } from '../styles';

// --------------------------------------------------------

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: colors.main },
          headerTitleStyle: { color: colors.grayscale[0] },
        }}
        component={screens.Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: colors.main },
          headerTitleStyle: { color: colors.grayscale[0] },
        }}
        name="Music"
        component={screens.Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: colors.main },
          headerTitleStyle: { color: colors.grayscale[0] },
        }}
        name="Profile"
        component={screens.Profile}
      />
    </Tab.Navigator>
  );
};

// --------------------------------------------------------

const RootStackNav = createStackNavigator();
const RootStack = () => {
  const userData = useSelector(store => store.user.userData);

  return (
    <RootStackNav.Navigator initialRouteName="Splash">
      <RootStackNav.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={screens.Splash}
      />
      {!userData ? (
        <RootStackNav.Screen
          name="Authorization"
          options={{
            headerShown: false,
          }}
          component={screens.Authorization}
        />
      ) : (
        <RootStackNav.Screen
          name="Main"
          options={{
            headerShown: false,
          }}
          component={TabStack}
        />
      )}
      <RootStackNav.Screen
        name="Settings"
        options={{
          headerShown: false,
        }}
        component={screens.Settings}
      />
    </RootStackNav.Navigator>
  );
};

// --------------------------------------------------------

export default RootStack;
