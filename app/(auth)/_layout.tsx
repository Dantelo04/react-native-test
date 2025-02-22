import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="sign-in" options={{
          headerShown: false
        }}/>
        <Stack.Screen name="sign-up" options={{
          headerShown: false
        }}/>
      </Stack>
      <StatusBar backgroundColor='black' style='light'></StatusBar>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})