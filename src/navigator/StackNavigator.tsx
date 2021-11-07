import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from "../screens/PageTwoScreen";
import { PageThreeScreen } from "../screens/PageThreeScreen";
import { PersonScreen } from "../screens/PersonScreen";

//Define prop types to screens
export type RootStackParams = {
  PageOneScreen: undefined
  PageTwoScreen: undefined
  PageThreeScreen: undefined
  PersonScreen: {id: number, name:string}
}


const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="PageTwoScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#660000',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="PageOneScreen" options={{ title: "Página 1" }} component={PageOneScreen} />
      <Stack.Screen name="PageTwoScreen" options={{ title: "Página 2" }} component={PageTwoScreen} />
      <Stack.Screen name="PageThreeScreen" options={{ title: "Página 3" }}component={PageThreeScreen} />
      <Stack.Screen name="PersonScreen"  options={{ title: "Persona" }} component={PersonScreen} />
    </Stack.Navigator>
  )
}