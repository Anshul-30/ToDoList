import type from "../type"

export const Login1 = () => {
    return {
        type:type.LOGIN
    }
}



export const Logout = () => {
    return {
        type:type.LOGOUT
    }
}

export const  DataInput = (data) =>{
    return{
        type:type.User_Data,
        payload:{
            id:Math.random,
            data:data
        }
    }
}