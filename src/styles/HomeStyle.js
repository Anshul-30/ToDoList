import React from "react";
import { StyleSheet } from 'react-native'

const HomeStyle = StyleSheet.create({
    view: {

        // height: "90%"
    },
    img: {
        height: 20,
        width: 20,

    },
    touch: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        // top:200,
        height:30,
        width:30,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightgreen'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        // margin: 15
    },
    logouttext: {
        color: 'tomato',
        fontSize: 17,
        fontWeight: '600',
        // margin: 15
    },
    logout:{
        // flex:1,
        flexDirection:'row',
        margin:10,
        justifyContent:'space-between'
    },
    text1:{
        padding:3,fontSize:16
    }
})
export default HomeStyle