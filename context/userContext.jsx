import { createContext, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserProvider = ({children}) => {
const [users, setUsers] = useState({})
const [activities, setActivities] = useState([])


const getActivities = async (id) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`${id}`)
        const res = JSON.parse(jsonValue)
        console.log("datos despues del login: ",res)
        setActivities(res)
      } catch (e) {
       console.log(e)
      }
}

const addActivity = (data) => {
activities == null ? setActivities([data]) : setActivities([...activities, data])
alert("Se ha creado con exito!")
}

const deleteActivity = (key) => {
    const updateActivities = activities.filter((activity) => activity.key !== key) 
    setActivities([...updateActivities]) 
    alert("La actividad se elimino correctamente!")
}
    
    return (
        <UserContext.Provider value={{ users, activities, addActivity, deleteActivity, setActivities, setUsers, getActivities}}>
            {children}
        </UserContext.Provider>
    )
}
