import React from 'react'
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import images from '../../constatnts/imagepath'
import HomeStyle from '../../styles/HomeStyle'
import navigationString from '../../navigation/navigationString'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../../redux/action/auth'
import { DeleteData } from '../../redux/action/auth'
import dataInput from '../../redux/reducer/DatnInput'
import { ScrollView } from 'react-native-gesture-handler'
export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.dataInput.list)
  console.log(list)
  return (

    // <SafeAreaView>
    <View style={{ position: 'relative', flex: 1 }}>
      <View style={HomeStyle.logout}>
        <Text style={HomeStyle.text}>Home</Text>
        <TouchableOpacity onPress={() => dispatch(Logout())}>
          <Text style={HomeStyle.logouttext}>Logout</Text>

        </TouchableOpacity>
      </View>
      <ScrollView>
      {
        list.map((element) => {
          return (
            <>
              <View  style={{ shadowOpacity:.5,shadowOffset:{height:2,width:-2},elevation:7,backgroundColor:'white',flexDirection: 'row',borderRadius:5,justifyContent:'space-between',
            margin:7}}>
                <View style={{margin:10}}>
                  <Text style={HomeStyle.text1}>Name : {element.name}
                  </Text>
                  <Text style={HomeStyle.text1}>Age : {element.age}
                  </Text>
                  <Text  style={HomeStyle.text1}>RollNo : {element.rollno}
                  </Text>
                  <Text style={HomeStyle.text1}>Phone Number : {element.phone}
                  </Text>
                  <Text style={HomeStyle.text1}>Address : {element.address}
                  </Text>
                </View>
                  <View style={{flexDirection:'column',justifyContent:'space-between'}}>

                <TouchableOpacity style={{margin:10}} onPress={() => dispatch(DeleteData(element.id))}>
                  <Image source={images.delete1} style={{height:35,width:35}} />
                </TouchableOpacity>
                <TouchableOpacity style={{margin:10}} >
                  <Image source={images.edit} style={{height:30,width:30}} />
                </TouchableOpacity>
                  </View>
              </View>

            </>
          )
        })
      }
      </ScrollView>
      


      <TouchableOpacity onPress={() => navigation.navigate(navigationString.TASK)} style={HomeStyle.touch}>
        <Image source={images.plus} style={HomeStyle.img} />
      </TouchableOpacity>


    </View>


/* </SafeAreaView> */




  )
}
