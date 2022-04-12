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
                    name1:data.name,
                    age: data.age,
                    rollno : data.rollno,
                    phone:data.phone,
                    address:data.address
                }
            ]
        }
        case type.Delete_Data:
            const newlist = state.list.filter((element) => element.id != action.id)
            return{
                ...state,
                list:newlist
            }
        default:return state
    }
 }

export default dataInput

