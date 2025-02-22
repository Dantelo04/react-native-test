import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface FormFieldProps {
    title?: string
    placeholder?: string
    value?: string
    handleChangeText?: (text: string) => void
    otherStyles?: object
}

const FormField = ({title, placeholder, value, handleChangeText, otherStyles}:FormFieldProps) => {
    const [focus, setFocus] = React.useState(false)

    return (
        <View style={{
            ...otherStyles,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
        }}>
        <Text style={{
            color: 'white', 
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            }}>{title ? title : 'Label'}</Text>
        <TextInput
            value={value}
            onFocus={()=> setFocus(true)}
            onBlur={()=> setFocus(false)}
            onChangeText={handleChangeText} 
            secureTextEntry={title === 'Password'}
            placeholder={placeholder ? placeholder : 'Placeholder'}
            style={{
                padding: 12,
                backgroundColor:  '#141414',
                borderRadius: 8,
                minHeight: 48,
                borderColor: focus ? '#4f4e4e' : '#141414',
                borderWidth: 1,
                color: 'white',
                fontFamily: 'Poppins-Regular',
            }}/>
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({})