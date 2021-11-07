import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { VectorIcon } from '../components/VectorIcon';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  //Para tener la información del context
  const { authState } = useContext(AuthContext);
  

  return (
    <View style={{
        ...styles.globalMargin, 
        marginTop: insets.top
      }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favoriteIcon && (
          <VectorIcon
            name={authState.favoriteIcon}
            size={50}
            color='red'
          />
        )
      }
      

    </View>
  )
}

