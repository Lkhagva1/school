
import React from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
const UserContext = createContext()
export  const UserStore = (props) => {
    const [User,setUser]=useState(false);


    
    const login=(email,password)=>{
            try{
                axios.post('http://192.168.8.64:4550/', {
                    username: email,
                    password: password,
                  })
                  .then(function (response) {
                    console.log(response);
                    setUser(true);
                    Cookies.set("user",email)
                    
                })
                  .catch(function (error) {
                    console.log(error);
                    alert("newtreh ner nuuts ug buru bna")
                  });
            }catch(err){
                console.log(err)
                }
        }
        const logout=()=>{
          setUser(false)
          Cookies.remove("user")
        }
  return (
    <UserContext.Provider value={{login,User,logout}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext
