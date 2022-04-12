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
            
            list:[
                ...state.list,
                {
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
                
                list:newlist
            }

            case type.EDIT:
                {
                list = state.list.map((element)=>{
                        const [data] = action.payload
                        if(element.id  === action.id){
                            return{
                                ...state.list,
                                id:id,
                                name:data.name
                            }
                        }
                        else{
                            return{...state.list}
                        }
                    }
                    )
                }
        default:return state
    }
 }

export default dataInput

