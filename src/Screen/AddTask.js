import React, { useState } from 'react'
import { TextInput, View, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhoneInput from "react-native-phone-number-input";
import AddStyle from '../styles/AddTask';
import navigationStrings from '../navigation/navigationString'
import TextInputComponent from '../Components/TextInput';
import LoginStyle from '../styles/LoginStyle';
import { useDispatch } from 'react-redux';
import { DataInput } from '../redux/action/auth';


export default function AddTask({ navigation }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [rollno, setRollno] = useState('')
  const [phone, setPhoneNumber] = useState('')

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)


  const data = { name, age, rollno, phone, address }


const dispatch = useDispatch()
  const submit = () => {
    if (name != '') {
      setNameError(false)
      if (age != 0) {
        setAgeErro(false)
        if (rollno != '') {
          setRollnoError(false)
          if (phone.length == 10) {
            setPhoneNumberError(false)
            if (address != 0) {
              setAddressError(false)
              dispatch(DataInput(data))
              console.log(data)
              navigation.navigate(navigationStrings.HOME)
            }
            else
              setAddressError(true)
          }
          else
            setPhoneNumberError(true)
        }
        else
          setRollnoError(true)
      }
      else
        setAgeErro(true)
    }
    else
      setNameError(true)
  }
  return (<SafeAreaView>
    <View style={AddStyle.view}>
      <Text style={AddStyle.text}>Fill details</Text>
      <TextInputComponent placeholder='Enter Name' onChangeText={(value) => setName(value)} />
      {
        nameError ? <Text style={LoginStyle.error}>Enter Name</Text> : null
      }
      <TextInputComponent placeholder='Enter Age' onChangeText={(value) => setAge(value)} />
      {
        ageError ? <Text style={LoginStyle.error}>Enter Age</Text> : null
      }
      <TextInputComponent placeholder='Enter RollNo' onChangeText={(value) => setRollno(value)} />
      {
        rollnoError ? <Text style={LoginStyle.error}>Enter Rollno </Text> : null
      }
      <TextInputComponent placeholder='Enter Phone Number' onChangeText={(value) => setPhoneNumber(value)} />
      {
        phoneError ? <Text style={LoginStyle.error}>Enter Phone NUmber
        </Text> : null
      }
      <TextInputComponent placeholder='Enter Address' onChangeText={(value) => setAddress(value)} />
      {
        addressError ? <Text style={LoginStyle.error}>Enter Address</Text> : null
      }
      <TouchableOpacity activeOpacity={0.8} onPress={submit}>
        <View style={AddStyle.submitview}>
          <Text style={AddStyle.submit}> Submit</Text>
        </View>
      </TouchableOpacity>

      {/* <PhoneInput
        displayInitialValueAsLocalNumber={true}
          placeholder='Enter phone number'
          containerStyle={{ height: 65, width: '95%', borderRadius: 3 }}
          withDarkTheme
          withShadow
          autoFocus
          onChangeText={(value) => setText(value)}
          /> */}
    </View>
  </SafeAreaView>



  )
}
