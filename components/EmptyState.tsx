import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './CustomButton';
import { router } from 'expo-router';

interface EmptyStateProps {
    title: string;
    subtitle?: string;
}

const EmptyState = ({title, subtitle}: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.empty}
        style={{
            width: 290,
            height: 215,
        }}
        resizeMode='contain'
      />
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <Text style={styles.title}>{title}</Text>
      <CustomButton
        title='Upload a video'
        handlePress={()=> router.push('/create')}
      />
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        paddingBottom: 24,
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        paddingBottom: 8,
    }
})