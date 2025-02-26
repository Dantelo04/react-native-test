import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { icons } from '@/constants'

const SearchInput = () => {
    const [focus, setFocus] = React.useState(false)


    return (
        <View style={{
            position: 'relative',
            width: '100%',
        }}>
            <TextInput 
                onFocus={()=> setFocus(true)}
                onBlur={()=> setFocus(false)}
                placeholder='Search for a video topic'
                style={{
                    padding: 12,
                    backgroundColor:  '#141414',
                    borderRadius: 8,
                    minHeight: 48,
                    borderColor: focus ? '#4f4e4e' : '#141414',
                    borderWidth: 1,
                    color: 'white',
                    fontFamily: 'Poppins-Regular',
                }}
            />
            <TouchableOpacity 
            activeOpacity={0.8}
            style={{
                position: 'absolute',
                right: 12,
                top: 14,
            }}>
                <Image
                    source={icons.search}
                    style={{
                        width: 18,
                        height: 18,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
    }

export default SearchInput

const styles = StyleSheet.create({})