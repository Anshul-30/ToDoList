import React from 'react'
import type from '../type'
 const initialState = {
     list:[]
 };
 const dataInput =(state = initialState ,action)=>{
    switch(action.type){
        case type.User_Data :
        const {id, data} = action.payload;
        return{
            ...state,
            list:[
                ...state.list,{
                    id:id,
                    name:data.name,
                    age: data.age,
                    rollno : data.rollno,
                    phone:data.phone,
                    address:data.address
                }
            ]
        }
        default:return state
    }
 }

export default dataInput

