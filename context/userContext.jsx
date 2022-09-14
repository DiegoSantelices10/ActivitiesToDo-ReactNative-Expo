import { createContext, useContext, useState } from 'react'
import { getData } from '../utils/index'


export const UserContext = createContext()

export const useUser = () => useContext(UserContext)






export const UserProvider = ({children}) => {
const [users, setUsers] = useState([])

const addActivity = (data) => setUsers([{...users, activities: {data}}])


const deleteActivity = (id) =>
        setUsers([...users.filter((user) => user.id !== id)]);
    
    return (
        <UserContext.Provider value={{ users, addActivity, deleteActivity, setUsers }}>
            {children}
        </UserContext.Provider>
    )
}
