import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import EmptyState from './EmptyState';

export type Posts = {
    id: number;
    title: string;
}

interface TrendingProps {
    posts: Posts[];
}

const Trending = ({posts}: TrendingProps) => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)
        // Refresh logic
        setRefreshing(false)
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
                <View style={{
                    padding: 12,
                    backgroundColor: '#141414',
                    borderRadius: 8,
                    marginRight: item.id > posts.length - 1 ? 0 : 4,
                }}>
                    <Text style={{color: 'white'}}>{item.title}</Text>
                </View>
            )}
            horizontal
            ListEmptyComponent={() => (
                <EmptyState title='Be the first to upload a video!' subtitle='No videos found'/>
            )}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
    )
}

export default Trending

const styles = StyleSheet.create({})