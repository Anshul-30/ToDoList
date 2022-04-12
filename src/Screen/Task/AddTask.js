import React, { useState } from 'react'
import { TextInput, View, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhoneInput from "react-native-phone-number-input";
import AddStyle from '../../styles/AddTask';
import navigationStrings from '../../navigation/navigationString'
import TextInputComponent from '../../Components/TextInput';
import LoginStyle from '../../styles/LoginStyle';
import { useDispatch } from 'react-redux';
import { DataInput } from '../../redux/action/details';


export default function AddTask({ navigation, route }) {

  const data1 = route?.params?.props


  const [name, setName] = useState(data1?.name1 ? data1?.name1 : "")
  const [age, setAge] = useState(data1?.age ? data1?.age : "")
  const [address, setAddress] = useState(data1?.address ? data1?.address : "")
  const [rollno, setRollno] = useState(data1?.rollno ? data1?.rollno : "")
  const [phone, setPhoneNumber] = useState(data1?.phone ? data1?.phone : "")

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)


  const data = { name, age, rollno, phone, address }


  const dispatch = useDispatch()

  function edit() {
    console.log("edit")

    navigation.navigate(navigationStrings.HOME)
  }
  function submit() {
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


  return (
    <SafeAreaView>
      <View style={AddStyle.view}>
        <Text style={AddStyle.text}>Fill details</Text>
        <TextInputComponent
          placeholder='Enter Name'
          value={name}
          onChangeText={(value) => setName(value)} />

        {
          nameError ? <Text style={LoginStyle.error}>Enter Name</Text> : null
        }
        <TextInputComponent
          placeholder='Enter Age'
          value={age}
          onChangeText={(value) => setAge(value)} />

        {
          ageError ? <Text style={LoginStyle.error}>Enter Age</Text> : null
        }
        <TextInputComponent
          placeholder='Enter RollNo'
          onChangeText={(value) => setRollno(value)}
          value={rollno}
        />

        {
          rollnoError ? <Text style={LoginStyle.error}>Enter Rollno </Text> : null
        }
        <TextInputComponent
          placeholder='Enter Phone Number'
          onChangeText={(value) => setPhoneNumber(value)}
          value={phone}
        />

        {
          phoneError ? <Text style={LoginStyle.error}>Enter Phone NUmber
          </Text> : null
        }
        <TextInputComponent
          placeholder='Enter Address'
          onChangeText={(value) => setAddress(value)}
          value={address}
        />

        {
          addressError ? <Text style={LoginStyle.error}>Enter Address</Text> : null
        }
        <TouchableOpacity activeOpacity={0.8} onPress={data1 ? () => edit() : () => submit()}>
          <View style={AddStyle.submitview}>
            <Text style={AddStyle.submit}> {data1 ? "Edit" : "submit"}</Text>
          </View>
        </TouchableOpacity>

        
      </View>
    </SafeAreaView>



  )
}
