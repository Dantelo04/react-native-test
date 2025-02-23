import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {createUser} from '@/lib/appwrite'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider'

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  })

  const [loading, setLoading] = useState(false);
  const {setIsLogged, setUser} = useGlobalContext();

  const handleSubmit = async () => {
    if (formData.email === '' || formData.username === '' || formData.password === '') {
      Alert.alert('All fields are required');
      return; // Prevents further execution
    }

    setLoading(true);

    try {
      const result = await createUser(formData.email, formData.password, formData.username);
      console.log('Should redirect', result);
      setUser(result);
      setIsLogged(true);
      console.log('Should redirect', result);
      router.replace('/home');  // Ensure it's correctly used
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{
        width: '100%',
        height: '100%',
      }}>
        <View style={{
          paddingHorizontal: 24,
          paddingTop: 42,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
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
            }}>Sing Up to Anoto</Text>
          </View>
          <View style={{
            paddingTop: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}>
            <FormField 
              title='Username'
              value={formData.username}
              handleChangeText={(text: string) => setFormData({...formData, username: text})}
              placeholder='Enter your username'
            />
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
            title={loading ? 'Loading...' : 'Sign Up'}
            isLoading={loading}
            handlePress={handleSubmit}
            containerStyle={{
              marginTop: 12,
              width: '100%',
            }}
          />
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
          }}>
            <Text style={{
              color: '#fff',
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>Already have an account?</Text>
            <Link 
            href="/sign-in"
            style={{
              color: '#f90',
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
            }}>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

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