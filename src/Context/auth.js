import React, {createContext, useState} from "react";

export const AuthContext = createContext(null)
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const signIn = (newUser, cb) => {
        setUser(newUser)
        cb()
    }
    const signOut = (cb) => {
        setUser(null)
        cb()
    }

    return (
        <AuthContext.Provider value={{user, signOut, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}
