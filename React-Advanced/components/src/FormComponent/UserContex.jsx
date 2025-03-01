import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined)



export const UserProvider = ({children})=>{
  const [user]  = useState({
    name:"teja",
    email:'rteja170@gmail.com',
    dob:'01/01/2000'
  })
  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
}


export const useUser = () => useContext(UserContext)