import React from "react";
import { StyleSheet } from 'react-native'
import { assets } from "../../react-native.config";
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
        fontFamily:'Mulish-Bold',
        // fontFamily:'DancingScript-VariableFont_wght',
        // fontWeight:'600',
        fontSize:textScale(20),
        padding:moderateScaleVertical(20)
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
        borderRadius:moderateScale(5),
        marginHorizontal:moderateScale(40),
        marginTop:moderateScaleVertical(12),

    } ,
    error:{
        color:'red',
        marginLeft:moderateScale(10),
        fontFamily:'Mulish-SemiBold'
    }    
})
export default LoginStyle