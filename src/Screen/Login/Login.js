import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Button } from 'react-native'
import RNRestart from 'react-native-restart'
import { useDispatch } from 'react-redux'
import TextInputComponent from '../../Components/TextInput'
import strings, { changelanguage } from '../../constatnts/lang'
import { Login1 } from '../../redux/action/auth'
import LoginStyle from '../../styles/LoginStyle'
import Modal from 'react-native-modal'

export default function Login({ navigation }) {
  const dispatch = useDispatch()
  const [pass, setPass] = useState('Anshul@30')
  const [email, setEmail] = useState('Anshul@gmail.com')
  const [nameShow, setNameShow] = useState(false)
  const [passShow, setPassShow] = useState(false)
  const [emailError, setEmailError] = useState(false)


  // ------------Regex---------


  const [isModalVisible, setIsModalVisible] =useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
  const data1 = { email, pass }


  const onchnagelanguge = (key) => {
    changelanguage(key)
    RNRestart.Restart()

  }

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

            <Text style={LoginStyle.text}>{strings.LOGIN}</Text>
            <Text></Text>
            <TextInputComponent
              placeholder={strings.ENTER_EMAIL}
              value={email}
              onChangeText={(value) => setEmail(value)} />

            {nameShow ? <Text style={LoginStyle.error}>{strings.ENTER_VALID_EMAIL}</Text> : null}
            {emailError ? <Text style={LoginStyle.error}>{strings.EMAIL_CANT_BE_EMPTY} </Text> : null}

          </View>
          <View>

            <TextInputComponent
              placeholder={strings.ENTER_PASSWORD}
              onChangeText={(value) => setPass(value)}
              value={pass}
              securetext={true}
            />


            {passShow ? <Text style={LoginStyle.error}>{strings.ENTER_STRONG_PASSWORD}</Text> : null}

          </View>
          <TouchableOpacity onPress={click}>
            <View style={LoginStyle.btn}>
              <Text style={{ color: 'white' }}>{strings.LOGIN}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModal}>
            <View style={LoginStyle.btn}>
              <Text style={{ color: 'white' }}>Change Language</Text>
            </View>
          </TouchableOpacity>


          {/* -----------------MODAL---------------------- */}




          <Modal isVisible={isModalVisible}>
            <View style={{ backgroundColor: 'white' }}>
              <TouchableOpacity onPress={() => onchnagelanguge('hn')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>Italian</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>English</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>Hindi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>Urdu</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>Tamil</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>French</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>Punajbi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>Spanish</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={LoginStyle.btn}>
                  <Text style={{ color: 'white' }}>Japenese</Text>
                </View>
              </TouchableOpacity>
              <Button title='hide' onPress={handleModal}/>
            </View>
          </Modal>

{/* ---------------------MODAL END---------------------------- */}
        </View>
      </SafeAreaView>
    </>
  )
}
