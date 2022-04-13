import AsyncStorage from '@react-native-async-storage/async-storage';


export const setData =(data)=>{
    try{
        let jsonvalue = JSON.stringify(data)
        await AsyncStorage.setItem('myList',jsonvalue)

    }
    catch(e){
        console.log('error raised')
    }
}


export const getData =async() =>{
try{
    const value =await AsyncStorage.getItem('myList')
let jsonvalue = JSON.parse(value)
return jsonvalue
}
catch(e){

}
}