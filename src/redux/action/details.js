import type from "../type"

export const  DataInput = (data) =>{
    return{
        type:type.User_Data,
        payload:{
            id:Math.floor(Math.random()*1000),
            data:data
        }
    }
}
export const DeleteData =(id)=>{
return{
    type:type.Delete_Data,
    id
}
}
export const UpdateData = (data)=>{
    // console.log(index)
    return{
        type:type.EDIT,
        payload:data,
            
        }
    }
