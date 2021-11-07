import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';
import { VectorIcon } from '../components/VectorIcon';



export const TabsNavigator = () => {
  return Platform.OS === 'ios'
    ? <IOSTabs />
    : <AndroidTabs />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();


const AndroidTabs = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: 'colors.primary',
        tabBarStyle: {
          borderTopColor: 'grey',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({focused, color}) => {

          let iconName: any;
          switch (route.name) {
              case 'Tab1Screen':
              iconName = <VectorIcon name='apps' />
              break;

              case 'Tab2Screen':
              iconName = <VectorIcon name='logo-windows' />
              break;

              /* case 'Tab3Screen':
              iconName = <VectorIcon name='book' />
              break; */
          }
          return <Text>{iconName}</Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      {/* <BottomTabAndroid.Screen name="Tab3Screen" options={{ title: 'Tab3' }} component={StackNavigator} /> */}
    </BottomTabAndroid.Navigator>
  );
}




const BottomTabIOS = createBottomTabNavigator();

const IOSTabs = () => {

  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'pink'
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: 'grey',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({focused, color, size}) => {

          let iconName: any;
          switch (route.name) {
              case 'Tab1Screen':
              iconName = <VectorIcon name='apps' />
              break;

              case 'Tab2Screen':
              iconName = <VectorIcon name='logo-windows' />
              break;

              /* case 'Tab3Screen':
              iconName = <VectorIcon name='book' />
              break; */
          }
          return <Text>{iconName}</Text>
        }
      })}


    >
      {/* Icon: forma 1 */}
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text> }} component={Tab1Screen} /> */}
      
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      {/* <BottomTabIOS.Screen name="Tab3Screen" options={{ title: 'Tab3' }} component={StackNavigator} /> */}
    </BottomTabIOS.Navigator>
  );
}