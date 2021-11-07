import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { VectorIcon } from '../components/VectorIcon';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';


//interface Props extends NativeStackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};


export const PageOneScreen = ({ navigation } :Props) => {

  //Personalize navigation to show hamburguer action
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{ marginRight: 10 }}
          onPress={() => { navigation.toggleDrawer() }}
        >
          <Icon 
          name='menu'
          size={35}
          color='white'
          />
        </TouchableOpacity>
      ),
    })
  }, [])

  const {setUserName} = useContext(AuthContext);
  
  const changeName = (username:string) => {
    setTimeout(() => {
      setUserName(username);
      navigation.navigate('PersonScreen');
    }, 300)
  }

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <TouchableOpacity
          style={{
            ...styles.buttonNavigator,
            backgroundColor: '#5856D6'
          }}
          onPress={() => changeName('Peter') }
        >
          <VectorIcon name='happy' size={35} />
          <Text style={{color: 'white'}}>Peter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.buttonNavigator,
            backgroundColor: '#FF9427'
          }}
          onPress={() => changeName('María') }
        >
          <Icon 
            name='happy'
            size={35}
            color='white'
          />
          <Text style={{color: 'white'}}>María</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

