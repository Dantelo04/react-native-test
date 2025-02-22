import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title?: string,
    handlePress?: () => void,
    containerStyle?: object,
    textStyle?: object,
    isLoading?: boolean,
}

const CustomButton = ({
    title,
    handlePress,
    containerStyle,
    textStyle,
    isLoading,
}:CustomButtonProps) => {
  return (
    <TouchableOpacity 
        style={{
            backgroundColor: '#f90',
            padding: 12,
            borderRadius: 8,
            width: '80%',
            opacity: isLoading ? 0.5 : 1,
            ...containerStyle,
        }}
        activeOpacity={0.7}
        onPress={handlePress}
        disabled={isLoading}
    >
      <Text style={{
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        ...textStyle,
      }}>{title ? title: 'Button'}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})