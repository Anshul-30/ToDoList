import React from "react";
import { StyleSheet } from 'react-native'
import { moderateScale, moderateScaleVertical, textScale } from "./responsiveSize";

const LoginStyle = StyleSheet.create({
    view: {
        // flex:1,
        justifyContent:'center',
        // alignContent:'center'
        marginTop:moderateScaleVertical(200),
        // height:'85%',
        
        
    },
    text:{
        color:'green',
        textAlign:'center',
        fontWeight:'600',
        fontSize:textScale(20),
        padding:moderateScaleVertical(7)
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
        marginLeft:moderateScale(10)
    }    
})
export default LoginStyle