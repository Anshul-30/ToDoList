import React from 'react'
import { TextInput, View, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhoneInput from "react-native-phone-number-input";
import AddStyle from '../styles/AddTask';
import navigationStrings from '../navigation/navigationString'
import TextInputComponent from '../Components/TextInput';
export default function AddTask({ navigation }) {
  return (<SafeAreaView>
    <View style={AddStyle.view}>
      <TextInputComponent/>
      <TextInputComponent/>
      <TextInputComponent/>
      <TextInputComponent/>

      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(navigationStrings.HOME)}>
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
