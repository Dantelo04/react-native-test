import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider';
import SearchInput from '@/components/SearchInput';

const Home = () => {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeView}>
        <Text style={{
          fontSize: 20,  
          fontFamily: 'Poppins-Regular',
          color: '#fff',
          }}>Welcome back</Text>
        <Text style={{
          fontSize: 24,  
          fontFamily: 'Poppins-Bold',
          color: '#fff',
        }}>
          {user ? user.username : 'Username'}
        </Text>
        {/* <Text style={{fontSize: 18, fontFamily: 'Poppins-Regular', color: 'white'}}>Discover endless possibilities for your business.</Text> */}
      </View>
      <SearchInput></SearchInput>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    padding: 24,
    width: '100%',
    backgroundColor: '#000',
    height: '100%',
  },
  welcomeView: {
    gap: 8,
    marginTop: 24,
    borderColor: '#f90',
    borderWidth: 2,
    backgroundColor: '#1f1f1f',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  }
})