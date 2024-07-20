import { createContext, useState } from "react";
import AuthService from "../services/AuthService";


const AuthContext = createContext();
export const AuthProvider = ({children})=>{


    const[isAuthenticated,setAuthenticatied]=useState(false);
    //kontrol state'idir.login mi değil mi kontrol etmemizi sağlar.
    const login = async(username, password)=>{
        try {
            const response = await AuthService.login(username,password)
            console.log(response);
            if (response.access_token) {
                setAuthenticatied(JSON.parse(localStorage.getItem("user")))
                
            }
        } catch (error) {
            setAuthenticatied(false);
            throw new Error(error);

            
        }
    }

    const logout = ()=>{
        AuthService.logout();
        setAuthenticatied(false);
    }


    return <AuthContext.Provider value={{login,logout,isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContext