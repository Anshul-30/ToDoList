import React from "react";
import { StyleSheet } from 'react-native'

const LoginStyle = StyleSheet.create({
    view: {
        justifyContent:'center',
        height:'85%',
        // backgroundColor:'red',
        
    },
    text:{
        color:'green',
        textAlign:'center',
        fontWeight:'600',
        fontSize:25,
        padding:10
    },
    textInput: {
        borderRadius: 4,
        borderWidth: 1.5,
        marginHorizontal: 27,
        marginVertical:5

    },
    btn:{
        alignItems:'center',
        backgroundColor:'green',
        padding:10,
        borderRadius:5,
        marginHorizontal:50,
        marginTop:10,

    } ,
    error:{
        color:'red',
        marginLeft:10
    }    
})
export default LoginStyle