import React from "react"
import { TextInput, View, Image, StyleSheet, Text } from 'react-native'

const TextInputComponent = ({

    placeholder = '',
    placeholderTextColor = '',
    onChangeText = ''

}) => {
    return (
        <>
            <View style={style.container}>

                <View>
                    <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeText} style={{padding:7}}/>
                </View>

            </View>

        </>
    )
}
export default TextInputComponent


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
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