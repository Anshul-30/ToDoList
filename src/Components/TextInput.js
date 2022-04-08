import React from "react"
import { TextInput, View, Image, StyleSheet, Text } from 'react-native'

const TextInputComponent = ({
  
    placeholder = '',
    placeholderTextColor = '',
    
}) => {
    return (
        <>
            <View style={style.container}>
                
                
                
                   

                    <View>
                        <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} keyboardType="numeric"/>
                    </View>

                    

                </View>

        </>
    )
}
export default TextInputComponent


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        padding:10,
        borderRadius:5,
        borderWidth:1
    },
    img: {
        height: 20,
        width: 20
    }
})