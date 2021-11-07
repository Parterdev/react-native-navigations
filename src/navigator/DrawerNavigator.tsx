import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  //To show permanent drawer when screen is rotated
  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: (width >= height ? 'permanent' : 'front'),
        drawerPosition: 'left'
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}