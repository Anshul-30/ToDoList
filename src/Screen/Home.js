import React from 'react'
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import images from '../constatnts/imagepath'
import HomeStyle from '../styles/HomeStyle'
import navigationString from '../navigation/navigationString'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../redux/action/auth'

import dataInput from '../redux/reducer/DatnInput'
export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const list = useSelector((state)=>state.dataInput.list)
  console.log(list)
  return (
    <>
      <SafeAreaView>
        <View style={HomeStyle.logout}>
          <Text style={HomeStyle.text}>Home</Text>
          <TouchableOpacity onPress={() => dispatch(Logout())}>
            <Text style={HomeStyle.logouttext}>Logout</Text>

          </TouchableOpacity>
        </View>
        {
          list.map((element)=>{
            return(
              <>
              <Text>Name : {element.name}
              </Text>
              <Text>Name : {element.age}
              </Text>
              <Text>Name : {element.rollno}
              </Text>
              <Text>Name : {element.phone}
              </Text>
              <Text>Name : {element.address}
              </Text>
              </>
            )
          })
        }

        <View style={HomeStyle.view}>
          <TouchableOpacity onPress={() => navigation.navigate(navigationString.TASK)} style={HomeStyle.touch}>
            <Image source={images.plus} style={HomeStyle.img} />
          </TouchableOpacity>
        </View>




      </SafeAreaView>
    </>
  )
}
