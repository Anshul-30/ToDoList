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

        case type.Delete_Data: {
            const newlist = state.list.filter((element) => element.id != action.id)
            return {

                list: newlist
            }
        }

        case type.EDIT:{
                console.log("Data", action.payload)
                let data = action.payload
                console.log(data?.id?.id)
                let updateArr = state.list.map((val, i) => {
                    if (val?.id == data?.id?.id) {
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
