import { NavigationContainer } from '@react-navigation/native'
import {LogBox } from 'react-native';
import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigator'
import { CustomDrawerNavigator } from './src/navigator/CustomDrawerNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { TabsNavigator } from './src/navigator/TabsNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <CustomDrawerNavigator />
        {/* <DrawerNavigator /> */}
        {/* <TabsNavigator/> */}
      </AppState>
    </NavigationContainer>
  )
}

//Children could be => const AppState = ({ children }: {children: JSX.Element[]})...
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

//LogBox.ignoreLogs(['Reanimated 2']);

export default App;
