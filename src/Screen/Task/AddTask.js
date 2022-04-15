import React, { useEffect, useState } from 'react'
import { TextInput, View, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhoneInput from "react-native-phone-number-input";
import AddStyle from '../../styles/AddTask';
import navigationStrings from '../../navigation/navigationString'
import TextInputComponent from '../../Components/TextInput';
import LoginStyle from '../../styles/LoginStyle';
import { useDispatch } from 'react-redux';
import { DataInput, UpdateData } from '../../redux/action/details';
import { setData } from '../../utils/utils';


export default function AddTask({ navigation, route }) {

  const id = route?.params?.props
const editid = id?.userId

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [address, setAddress] = useState("")
  const [rollno, setRollno] = useState("")
  const [phone, setPhoneNumber] = useState("")

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)

  const userId = Math.floor(Math.random() * 1000);

  const data = [{ userId, name, age, rollno, phone, address }];

  useEffect(() => {
    if (id)
 {
      setName(id?.name)
      setAge(id?.age)
      setAddress(id?.address)
      setPhoneNumber(id?.phone)
      setRollno(id?.rollno)
    }
  }, [id])


  const dispatch = useDispatch()

  const edit = () => {
    // console.log(data1.id,index)
    // console.log(data)
    dispatch(UpdateData({ name, age, rollno, phone, address,editid  }))
    console.log(UpdateData)
    navigation.navigate(navigationStrings.HOME)
  }
  const submit = () => {
    if (name != '') {
      setNameError(false)
      if (age != 0) {
        setAgeErro(false)
        if (rollno != '') {
          setRollnoError(false)
          if (phone.length != 0) {
            setPhoneNumberError(false)
            if (address != 0) {
              setData(data);
              setAddressError(false)
              dispatch(DataInput(data))
              // console.log(data)
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
          keyboardType={"numeric"}

          onChangeText={(value) => setAge(value)} />

        {
          ageError ? <Text style={LoginStyle.error}>Enter Age</Text> : null
        }
        <TextInputComponent
          placeholder='Enter RollNo'
          keyboardType={"numeric"}

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
          keyboardType={"numeric"}

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
        <TouchableOpacity activeOpacity={0.8} onPress={id ? edit : submit}>
          <View style={AddStyle.submitview}>
            <Text style={AddStyle.submit}> {id ? "Edit" : "submit"}</Text>
          </View>
        </TouchableOpacity>


      </View>
    </SafeAreaView>



  )
}