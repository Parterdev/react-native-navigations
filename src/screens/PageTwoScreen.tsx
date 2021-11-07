import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any>{};

export const PageTwoScreen = ({navigation, route}:Props) => {


  //Customize title and header back title
  useEffect(() => {
    navigation.setOptions({
      title: 'Second custom screen',
      headerBackTitle: 'Regresar'
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{route.name}</Text>
      <Button 
        title="Page 3"
        onPress={() => navigation.navigate('PageThreeScreen')}
      />
    </View>
  )
}