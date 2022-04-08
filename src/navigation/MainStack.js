import React from 'react'
import AddTask from '../Screen/AddTask'
import Home from '../Screen/Home'

import navigationString from './navigationString'


export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.HOME} component={Home} />
      <Stack.Screen name={navigationString.TASK} component={AddTask} />

    </>
  )
}
