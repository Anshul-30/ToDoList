import React, { useEffect } from 'react';
import Route from './src/navigation/Route';
import { Provider } from 'react-redux';
import store from './src/store';
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native';
import { getData, getLogin } from './src/utils/utils';
import type from './src/redux/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import string from './src/constatnts/lang';
import { requestUserPermission,notificationListener } from './src/utils/notificationSdervice';

const { dispatch } = store;

const App = () => {
  useEffect(() => {
    requestUserPermission()
    // notificationListener()
    
    getlng()
    getLogin().then((res) => {

      dispatch({
        type: type.LOGIN,
        payload: res
      })
    })

    getData().then((res) => {
      console.log("res", res);
      if (!!res) {

        dispatch({
          type: type.User_Data,
          payload: res
        })
      }

    })
  }, [])

  const getlng = async () => {
    let lng = await AsyncStorage.getItem("language")
    console.log("lng ----", lng)
    if (!!lng) {
      string.setLanguage(lng)
      
    }
    else {
      string.setLanguage('en')
    }
  }
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={'white'} />
      <SafeAreaView style={{ flex: 1 }}>

        <Provider store={store}>
          <Route />

        </Provider>

      </SafeAreaView>



    </>
  )
}
export default App;