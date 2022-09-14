import { createContext, useContext, useState } from 'react'
import { storeData, getData } from '../utils/index'


export const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserProvider = ({children}) => {
const [users, setUsers] = useState({})
const [activities, setActivities] = useState([])


const getActivity = async () => {
    const data = await getData(users.user.id)   
    setActivities(data)
}

const addActivity = (data, id) => {
    setActivities([...activities, data]) 
    storeData(activities, id)    
}

const deleteActivity = (key) => {
    setActivities([...activities.filter((activity) => activity.key !== key)])
    storeData(activities, users.user.id)
        alert("La actividad se eliminó correctamente!")
}
    
    return (
        <UserContext.Provider value={{ users, activities, addActivity, deleteActivity, setActivities, setUsers, getActivity }}>
            {children}
        </UserContext.Provider>
    )
}
