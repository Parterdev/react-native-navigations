import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {

  const {signIn, logout, authState} = useContext(AuthContext)

  const {isLoggedIn} = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {
      !isLoggedIn ? (
        <Button
          title="SignIn"
          onPress={signIn}
        />
      ) : 
        <Button
          title="Logout"
          onPress={logout}
        /> 
      } 
      
    </View>
  )
}
