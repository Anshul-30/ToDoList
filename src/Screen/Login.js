import React, { useState } from 'react'
import { TextInput, SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { Login1 } from '../redux/action/auth'
import LoginStyle from '../styles/LoginStyle'
import TextInputComponent from '../Components/TextInput'
import images from '../constatnts/imagepath'

export default function Login({ navigation }) {
  const dispatch = useDispatch()
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [nameShow, setNameShow] = useState(false)
  const [passShow, setPassShow] = useState(false)

  const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");

  // const click = () => {
  //   if (emailRegex.test(email)) {
  //     setNameShow(false)
  //     if (strongRegex.test(pass)) {
  //       setPassShow(false)
  //       dispatch(Login1())

  //     }
  //     else {
  //       setPassShow(true)

  //     }
  //   }
  //   else
  //     setNameShow(true)
  // }
  return (
    <>
      <SafeAreaView>
        <View style={LoginStyle.view}>

          <Text style={LoginStyle.text}>LOGIN</Text>
          <TextInputComponent placeholder='Enter Password'/>




          <TextInputComponent
            placeholder={'Enter Name'}
            placeholderTextColor={'red'}
            
          />




          {nameShow ? <Text style={LoginStyle.error}>Enter Valid email</Text> : null}
          <TextInput placeholder='Enter password' onChangeText={(value) => setPass(value)} style={LoginStyle.textInput} />

          {passShow ? <Text>Enter Strong Password</Text> : null}

          <TouchableOpacity onPress={() => dispatch(Login1())}>
            <View style={LoginStyle.btn}>
              <Text style={{ color: 'white' }}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}
