import React, {  createContext, useState } from 'react'

export const AuthData=createContext()
function ContextApi({children}) {
    let [inpData,setinpData]=useState()
  return (
    <AuthData.Provider value={{inpData,setinpData}}>
        {children}
    </AuthData.Provider>
  )
}

export default ContextApi