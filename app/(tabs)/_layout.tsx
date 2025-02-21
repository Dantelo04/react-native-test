import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Image } from 'react-native'
import { icons } from '../../constants'

interface TabIconProps {
  icon: ImageSourcePropType | undefined
  color: string
  name: string
  focused: boolean
}

const TabIcon = ({icon, color, name, focused}: TabIconProps) => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    }}>
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={{
          width: 25,
          height: 25,
        }}
      />
      <Text style={{
        color: color,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        wordWrap: 'nowrap',
        width: 80,
        textAlign: 'center',
      }}>{name}</Text>
    </View>
  )
}
  


const TabsLayout = () => {
  return (
    <>
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopColor: 'transparent',
        shadowColor: 'transparent',
        shadowOpacity: 0,
        height: 94,
        elevation: 0,
        paddingTop: 18,
      },
      headerShown: false,
    }}>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color, focused})=> (
            <TabIcon 
              icon={icons.home}
              color={color}
              name='Home'
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='bookmark'
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({color, focused})=> (
            <TabIcon 
              icon={icons.bookmark}
              color={color}
              name='Bookmark'
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({color, focused})=> (
            <TabIcon 
              icon={icons.plus}
              color={color}
              name='Create'
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, focused})=> (
            <TabIcon 
              icon={icons.profile}
              color={color}
              name='Profile'
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})