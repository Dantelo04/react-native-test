import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from '@/context/GlobalProvider'

const App = () => {
  const {loading, isLogged} = useGlobalContext();

  if(!loading && isLogged) return <Redirect href="/home"/>

  if(loading) return <Text>Loading...</Text>
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Anoto!
          </Text>
          <Image
            source={images.cards}
            style={styles.imageCards}
            resizeMode='contain'
          />
          <View style={styles.descriptionContainer}>
            <Text style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Bold',
              fontSize: 24,
              fontWeight: 'bold',
              paddingHorizontal: 12,
              color: '#fff',
            }}>
              <Text style={{
                color: '#f90',
              }}>Anoto!</Text> discover endless possibilities for your business.
            </Text>
            <Image
              source={images.path}
              style={{
                position: 'absolute',
                top: 28,
                left: -15,
                width: 136,
                height: 15,
              }}
              resizeMode='contain'
            />
          </View>
          <Text style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              paddingHorizontal: 12,
              color: '#fff',
            }}>
              Anoto! is a platform that allows you to create and manage your own business cards, and share 
              them with your clients and partners.
            </Text>
            <CustomButton
              title='Continue with Email'
              handlePress={()=>{router.push('/sign-in')}}
              containerStyle={{
                paddingVertical: 16,
              }}
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={'black'} style='light'></StatusBar>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-Black',
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: 16,
    gap: 24,
  },
  imageCards: {
    width: '100%',
    height: 300,
    maxWidth: 380,
  },
  descriptionContainer: {
    position: 'relative',
    fontFamily: 'Poppins-Regular',
  }
});

