/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Route from './src/navigation/Route';
import { Provider } from 'react-redux';
import store from './src/store';
import {StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native';



const App = () => {
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
