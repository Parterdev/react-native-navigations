import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import { VectorIcon } from '../components/VectorIcon';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const {top:paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator style={{paddingTop}}
      screenOptions={({route}) => ({
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: 'black',
        tabBarPressColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: 'white'
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({focused, color}) => {
          let iconName: any;
          switch (route.name) {
              case 'ChatScreen':
              iconName = <VectorIcon name='chatbubbles' color={colors.primary} />
              break;

              case 'ContactsScreen':
              iconName = <VectorIcon name='call' color={colors.primary} />
              break;

              case 'AlbumsScreen':
              iconName = <VectorIcon name='chatbubbles' color={colors.primary} />
              break;
          }
          return <Text>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}