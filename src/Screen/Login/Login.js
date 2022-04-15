import React, { useState } from 'react'
import { TextInput, SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { Login1 } from '../../redux/action/auth'
import LoginStyle from '../../styles/LoginStyle'
import TextInputComponent from '../../Components/TextInput'
import images from '../../constatnts/imagepath'

export default function Login({ navigation }) {
  const dispatch = useDispatch()
  const [pass, setPass] = useState('Anshul@30')
  const [email, setEmail] = useState('Anshul@gmail.com')
  const [nameShow, setNameShow] = useState(false)
  const [passShow, setPassShow] = useState(false)
  const [emailError, setEmailError] = useState(false)


  // ------------Regex---------




  const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
const data1 =[{email ,pass}]


// ----------------validations----------


  const click = () => {
    if (email != 0) {
      setEmailError(false)
      if (emailRegex.test(email)) {
        setNameShow(false)
        if (strongRegex.test(pass)) {
          setPassShow(false)
          dispatch(Login1(data1))

        }
        else {
          setPassShow(true)

        }
      }
      else
        setNameShow(true)
    }
    else {
      setEmailError(true)
    }
  }


  return (
    <>
      <SafeAreaView>
        <View style={LoginStyle.view}>
          <View > 

          <Text style={LoginStyle.text}>LOGIN</Text>
          <TextInputComponent
            placeholder='Enter Email'
            value={email}
            onChangeText={(value) => setEmail(value)} />

          {nameShow ? <Text style={LoginStyle.error}>Enter Valid email</Text> : null}
          {emailError ? <Text style={LoginStyle.error}>Email can not be empty </Text> : null}

            </View>
            <View>

          <TextInputComponent
            placeholder={'Enter Password'}
            onChangeText={(value) => setPass(value)}
            value={pass}
            securetext={true}
            />


          {passShow ? <Text style={LoginStyle.error}>Enter Strong Password</Text> : null}

            </View>
          <TouchableOpacity onPress={click}>
            <View style={LoginStyle.btn}>
              <Text style={{ color: 'white' }}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}
