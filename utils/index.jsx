import AsyncStorage from '@react-native-async-storage/async-storage';

export async function validateUser(values, navigation, setUsers)  {
    try {
      const jsonValue = await AsyncStorage.getItem(`${values.email}`)
       const res = JSON.parse(jsonValue)
       res != null && values.email == res.email && values.password == res.password ?
       (setUsers({user: res}), navigation.navigate("Home")) : alert("no son iguales")
    } catch(e) {
      console.log(e)
    }
  }

export async function storeUser(values) {
    try {

      await AsyncStorage.setItem(`${values.email}`, JSON.stringify(values))
    } catch (e) {
     console.log(e)
    }
  }

  
export async function storeData(values, id) {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(values))
    const jsonValue = await AsyncStorage.getItem(id)
    const res = JSON.parse(jsonValue)
      console.log("store update:", res)
  } catch (e) {
   console.log(e)
  }
}


 export const getData = async (id) => {
    try {
      const jsonValue = await AsyncStorage.getItem(id)
      const res = JSON.parse(jsonValue)
      return res
    } catch (e) {
      console.log(e);
    }
  };

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

