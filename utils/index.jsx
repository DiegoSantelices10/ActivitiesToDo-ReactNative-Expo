import AsyncStorage from '@react-native-async-storage/async-storage';

export async function validateUser(values, navigation )  {
    try {
      const jsonValue = await AsyncStorage.getItem(`${values.email}`)
       const res = JSON.parse(jsonValue)

       res != null && values.email == res.email && values.password == res.password ?
       navigation.navigate("Home", { name: values.email } ) : alert("no son iguales")
    } catch(e) {
      console.log(e)
    }
  }

export async function storeData(values) {
    try {
      await AsyncStorage.setItem(`${values.email}`, JSON.stringify(values))
    } catch (e) {
     console.log(e)
    }
  }


export async function userData(){
    try {
      const jsonValue = await AsyncStorage.getItem("email");
      const res = JSON.parse(jsonValue)
       return res 
      console.log("hola mundo")
        console.log(res)
    } catch (e) {
      console.log(e);
    }
  }

export function iconType(type) {
    if(type === "education")
    return "book"
    if(type === "recreational")
    return "agriculture"
    if(type === "social")
    return "accessibility-new"
    if(type === "diy")
    return "architecture"
    if(type === "charity")
    return "auto-fix-high"
    if(type === "cooking")
    return "cake"
    if(type === "music")
    return "music-video"
    if(type === "busywork")
    return "construction"
        

}

