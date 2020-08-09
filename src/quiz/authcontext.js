import React, {useState, createContext, useContext} from "react";

const authState = {
username:"",
password: "",
isLogin: false,
}
export const AuthContext = createContext(authState);
export const AuthProvider = ({children}) =>{
    const auth = useState(authState)
    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)