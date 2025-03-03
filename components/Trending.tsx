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

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            style={{paddingVertical: 16, overflowY: 'hidden'}}
            renderItem={({item})=>(
                <View style={{
                    padding: 12,
                    backgroundColor: '#141414',
                    minHeight: 250,
                    borderRadius: 8,
                    marginRight: item.id > posts.length - 1 ? 0 : 16,
                }}>
                    <Text style={{color: 'white'}}>{item.title}</Text>
                </View>
            )}
            horizontal
            ListEmptyComponent={() => (
                <EmptyState title='Be the first to upload a video!' subtitle='No videos found'/>
            )}
        />
    )
}

export default Trending

const styles = StyleSheet.create({})