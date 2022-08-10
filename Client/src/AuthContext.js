import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./component/axios";


const AuthContext = React.createContext({})

export const useAuthContext = () =>  React.useContext(AuthContext);


export const AuthProvider = ({children}) => {
    const [user, setUser] = React.useState({});
    const navigate = useNavigate()

    const updateUser = (user) => {
        setUser(user)
    }

    const fetchUser = async () => {
        try {
           const res =  await axios.get("profile", {withCredentials: true})
            const {user} = res.data.payload;
            setUser({...user})
            navigate("/")

        } catch (error) {
            console.log("error", error)
            console.log("error", error.response)
            if(error?.response?.status === 401) {
                setUser({})
            }
            navigate("/login")
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
   
    return (
        <AuthContext.Provider value={{
            user,
            updateUser,
            fetchUser
        }}>
            {children}
        </AuthContext.Provider>
    )

}
