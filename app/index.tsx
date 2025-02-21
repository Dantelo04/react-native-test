import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>SIIII</Text>
      <Link href="/profile">Go to Profiles</Link>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
})
