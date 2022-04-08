import React from 'react'
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import images from '../constatnts/imagepath'
import HomeStyle from '../styles/HomeStyle'
import navigationString from '../navigation/navigationString'
import { useDispatch } from 'react-redux'
import { Logout } from '../redux/action/auth'

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  return (
    <>
      <SafeAreaView>
        <View style={HomeStyle.logout}>
        <Text style={HomeStyle.text}>Home</Text>
        <TouchableOpacity onPress={()=>dispatch(Logout())}>
        <Text style={HomeStyle.logouttext}>Logout</Text>

        </TouchableOpacity>
        </View>

        <View style={HomeStyle.view}>
          <TouchableOpacity onPress={() => navigation.navigate(navigationString.TASK)} style={HomeStyle.touch}>
            <Image source={images.plus} style={HomeStyle.img} />
          </TouchableOpacity>
        </View>




      </SafeAreaView>
    </>
  )
}
