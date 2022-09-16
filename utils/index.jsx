import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'


export async function validateUser(values, navigation, setUsers, getActivities)  {
    try {
      const jsonValue = await AsyncStorage.getItem(`${values.email}`)
       const res = JSON.parse(jsonValue)
       res != null && values.email == res.email && values.password == res.password ?
       (setUsers(res), getActivities(res.id), navigation.navigate("Home")) : 
        alert("no son iguales")
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

  
export async function setStorageData(values, id) {
  try {
    await AsyncStorage.setItem(`${id}`, JSON.stringify(values))
  } catch (e) {
   console.log(e)
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
    if(type === "relaxation")
    return "cake"
    if(type === "music")
    return "music-video"
    if(type === "busywork")
    return "construction"
        

}

export function fetchData(setData, types){
  types == "all" ?
  (  axios.get("http://www.boredapi.com/api/activity")
          .then((response) => setData(response.data))
          .catch((error) => console.log(error))) : 
  (  axios.get(`http://www.boredapi.com/api/activity?type=${types}`)
          .then((response) => setData(response.data))
          .catch((error) => console.log(error)))
}
