import React from 'react'
import { act } from 'react-test-renderer';
import type from '../type'
const initialState = {
    list: []
};
const dataInput = (state = initialState, action) => {
    switch (action.type) {
        case type.User_Data:
            const { id, data } = action.payload;
            return {

                list: [
                    ...state.list,
                    {
                        id: id,
                        name: data.name,
                        age: data.age,
                        rollno: data.rollno,
                        phone: data.phone,
                        address: data.address
                    }
                ]
            }
        case type.Delete_Data:
            const newlist = state.list.filter((element) => element.id != action.id)
            return {

                list: newlist
            }

        case type.EDIT:
            {
                console.log("Data",action.payload)
                let data = action.payload
                console.log(data?.id?.id)
                let updateArr = state.list.map((val, i) => {
                    if (val?.id == data?.id?.id) 
                    {
                    return data
                    }
                    return val
                })
            console.log("updated array", updateArr)

                return {
                    ...state,
                    list: updateArr,

                    
                }
            }

        default: return state
    }
}

export default dataInput

