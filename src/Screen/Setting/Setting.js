import { types } from '@babel/core'
import React, { useEffect } from 'react'
import {Text,TextInput} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import dataInput from '../../redux/reducer/DatnInput'
import type from '../../redux/type'
import { getLogin } from '../../utils/utils'
export default function Setting() {
   

const userStatus = useSelector(state => state.userState.userdata);
console.log(userStatus[0].email)


  return (<>
    <Text>
        settings
    </Text>
    <Text>{userStatus[0].email}{userStatus[0].pass}</Text>
    

  </>
  )
}
