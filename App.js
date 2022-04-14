import React, { useEffect } from 'react';
import Route from './src/navigation/Route';
import { Provider } from 'react-redux';
import store from './src/store';
import {StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native';
import { getData } from './src/utils/utils';
import type from './src/redux/type';

const {dispatch} = store;

const App = () => {

  useEffect(() => {
    getData().then((res) => {
      console.log("GetItemValue", res);
      if (!!res) {
        dispatch({
          type: type.User_Data,
          payload: res
        })
      }
    })
  }, [])


  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor={'white'}/>
      <SafeAreaView style={{flex:1}}>

        <Provider store={store}>
          <Route />

        </Provider>

      </SafeAreaView>



    </>
  )
}
export default App;