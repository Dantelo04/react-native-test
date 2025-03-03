import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    // Refresh logic
    setRefreshing(false)
  }

  const { user } = useGlobalContext();
  const data = [
    {
      id: 1,
      title: 'How to create a website',
    },
    {
      id: 2,
      title: 'How to create a mobile app',
    },
    {
      id: 3,
      title: 'How to create a video game',
    },
    {
      id: 4,
      title: 'How to create a website',
    },
    {
      id: 5,
      title: 'How to create a mobile app',
    },
    {
      id: 6,
      title: 'How to create a video game',
    },
    {
      id: 7,
      title: 'How to create a website',
    },
    {
      id: 8,
      title: 'How to create a mobile app',
    },
    {
      id: 9,
      title: 'How to create a video',
    }
  ]

  return (
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        style={{
          width: '100%',
          paddingHorizontal: 24,
          height: '100%',
          backgroundColor: '#000',
        }}
        renderItem={({item})=>(
          <View style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            backgroundColor: '#141414',
            borderRadius: 8,
            marginBottom: 16,
          }}>
            <Text style={{
            color: 'white'
            }}>{item.title}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <SafeAreaView style={{
            gap: 16,
          }}>
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
            <Text style={{color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold', width: '100%'}}>Latest Videos</Text>
            <Trending posts={data ?? []}/>
          </SafeAreaView>
        )
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000',
    height: '100%',
  },
  welcomeView: {
    gap: 8,
    borderColor: '#f90',
    borderWidth: 2,
    backgroundColor: '#1f1f1f',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  }
})