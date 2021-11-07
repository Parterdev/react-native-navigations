import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export interface VectorProps {
  name: string,
  color?: string,
  size?: number,
  type?: string,
  //action?: () => void,
}

export const VectorIcon = (
  { name,
    size=20, 
    color='white', 
    type='ionicon',
    //action
  }:VectorProps) => {


  return (
    <TouchableOpacity>
      <Icon
        name={name}
        size={size}
        color={color}
        type={type}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    
});
