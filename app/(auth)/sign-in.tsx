import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    // Your logic here
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{
        width: '100%',
      }}>
        <View style={{
          paddingHorizontal: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 42,
        }}>
          <View>
            <Text style={styles.title}>
              Anoto!
            </Text>
            <Text style={{
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              color: '#fff',
              textAlign: 'center',
            }}>Log in to Anoto</Text>
          </View>
          <View style={{
            paddingTop: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}>
            <FormField 
              title='Email'
              value={formData.email}
              handleChangeText={(text: string) => setFormData({...formData, email: text})}
              placeholder='Enter your email'
            />
            <FormField 
              title='Password'
              value={formData.password}
              handleChangeText={(text: string) => setFormData({...formData, password: text})}
              placeholder='Enter your password'
            />
          </View>
          <CustomButton
            title='Log in'
            isLoading={loading}
            handlePress={handleSubmit}
            containerStyle={{
              marginTop: 24,
              width: '100%',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-Black',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
})