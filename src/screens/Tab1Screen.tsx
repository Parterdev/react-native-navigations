import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { VectorIcon } from '../components/VectorIcon';
import { AuthContext } from '../context/AuthContext';

export const Tab1Screen = () => {

  const {top} = useSafeAreaInsets();

  useEffect(() => {
    //console.log('Tab1Screen.tsx effect');
  }, []);

  //Use of context to set favorite icon
  const {changeFavoriteIcon} = useContext(AuthContext);


  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Icons</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 50}}>
        <Icon 
          name='american-football-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('american-football-outline')}
        />

        <Icon 
          name='boat-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('boat-outline')}
        />

        <Icon 
          name='paw-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('paw-outline')}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 50}}>
        <Icon 
          name='egg-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('egg-outline')}
        />

        <Icon 
          name='hand-left-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('hand-left-outline')}
        />

        <Icon 
          name='leaf-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('leaf-outline')}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 50}}>
        <Icon 
          name='pizza-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('pizza-outline')}
        />

        <Icon 
          name='rocket-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('rocket-outline')}
        />

        <Icon 
          name='wallet-outline'
          size={40}
          color={colors.primary}
          onPress={() => changeFavoriteIcon('wallet-outline')}
        />
      </View>
      
      
    </View>
  )
}

