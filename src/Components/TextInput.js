import React from "react"
import { TextInput, View, Image, StyleSheet, Text } from 'react-native'

const TextInputComponent = ({

    placeholder = '',
    placeholderTextColor = '',
    onChangeText = '',
    value=" ",
    keyboardType,
    securetext= false

}) => {
    return (
        <>
            <View style={style.container}>

                <View>
                    <TextInput secureTextEntry={securetext} value={value} placeholder={placeholder} placeholderTextColor='black' onChangeText={onChangeText} style={{padding:7,color:'black'}} keyboardType={keyboardType}/>
                </View>

            </View>

        </>
    )
}
export default TextInputComponent


const style = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        marginHorizontal: 10,
        // padding: 10,
        height:35,
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 10
    },
    img: {
        height: 20,
        width: 20
    }
})