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