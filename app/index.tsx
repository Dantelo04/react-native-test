import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={title.container}>Anoto</Text>
      <Link href="/home" style={{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'normal',
        padding: 8,
        backgroundColor: '#000',
        borderRadius: 8,
        color: '#fff',
      }}>Go to Home</Link>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16,
    height: '100%',
  }
});

const title = StyleSheet.create({
  container: {
    fontSize: 70,
    fontFamily: 'Poppins-Black',
    fontWeight: 'bold',
  }
});
