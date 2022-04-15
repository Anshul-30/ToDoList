import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (data) => {
    try {
        let jsonvalue = JSON.stringify(data)
        await AsyncStorage.setItem('myList', jsonvalue)
        return { jsonvalue };
    }
    catch (error) {
        console.log('error raised')
    }
}


export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('myList')
        let jsonvalue = JSON.parse(value)
        console.log("getItemLocallyConsole---------", jsonvalue);
        return jsonvalue;
    }
    catch (error) {
        console.log(error);
    }
}

export const setLogin = async(login) =>{
try{
const value = JSON.stringify(login)
await AsyncStorage.setItem("login",value)

return value
}
catch(e){
    console.log("error",e)
}
}

export const getLogin = async () =>{
try{
  const value = await AsyncStorage.getItem("login") 
  const jsonvalue = JSON.parse(value)
  return jsonvalue 
}
catch(e){
console.log("error",e)
}
}