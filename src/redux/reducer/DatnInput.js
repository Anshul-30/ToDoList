import React from 'react'
import { act } from 'react-test-renderer';
import { setData } from '../../utils/utils';
import type from '../type'




const initialState = {
    list: []
};



const dataInput = (state = initialState, action) => {
    switch (action.type) {
        case type.User_Data: {
            console.log("payloadData in Submit form of Addtask", action.payload)
            const data = action.payload;

            let mergeData = [
                ...state.list,
                ...data
            ]
            setData(mergeData).then((val) => {
                console.log("Data set Locally", val);
            });
            return {
                ...state,
                list: mergeData
            }
        }
        case type.Delete_Data:
            const newList1 = [...state.list]

            const index = state.list.findIndex((items) => 
                items.userId === action.userId
                // console.log("itemuserId", items.userId)
            )
            console.log("ID", action.userId)
            console.log("index", index)
            if (index >= 0) {
                newList1.splice(index, 1)
            }
            setData(newList1).then((val) => {
                console.log("delete values", val)
            })
            return {
                ...state,
                list: newList1
            }



        case type.EDIT: {
            console.log("Data", action.payload)

            let data = action.payload
            console.log("data", data)
            console.log("id", data?.editid)
            let editArr = [...state.list]
            let index = state.list.findIndex((item) => item.userId === data.editid
            )
            console.log("index ", index)
            editArr[index] = data
            setData(editArr).then((value) => {
                console.log("up[date arry", value)
            })


            return {
                ...state,
                list: editArr,


            }
        }

        default: return state
    }
}

export default dataInput
