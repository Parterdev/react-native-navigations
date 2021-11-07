import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/appTheme';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

/* const Stack = createNativeStackNavigator();

const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  )
} */

export const CustomDrawerNavigator = () => {

  //To show permanent drawer when screen is rotated
  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: (width >= height ? 'permanent' : 'front'),
        headerShown: false,
        drawerPosition: 'left'
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={TabsNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white', alignItems:'center', paddingVertical: 10}}>
        <Image 
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif' 
          }}
          style={styles.avatar}
        />
        <Text>Hello</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Tabs')}
          style={styles.menuButton}>
          <Icon 
            name='home-outline'
            size={25}
            color={colors.primary}
          />
          <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButton}>
          <Icon 
            name='settings-outline'
            size={25}
            color={colors.primary}
          />
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
}