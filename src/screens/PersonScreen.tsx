import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'
import { AuthContext, AuthState } from '../context/AuthContext';

//Forma 1 para tipar argumentos
/* interface RouterParams {
  id: number,
  name: string,
} */

//Forma 2

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ({navigation, route}:Props) => {

  //Forma 1 para tipar argumentos
  //const params = route.params as RouterParams;
  const params = route.params;

  const {authState} = useContext(AuthContext);

  const { username } = authState;


  useEffect(() => {
    navigation.setOptions({
      title: username
    })
  },);

  return (
    <View style={styles.globalMargin}>
      {/* <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text> */}
      <Text style={styles.title}>{username}</Text>
    </View>
  )
}

