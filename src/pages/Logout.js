import React from 'react'
import {  useNavigate } from 'react-router-dom'
const Logout = ({isLoggedIn, setIsLoggedIn, setProfileId, profileId}) => {
   const navigate = useNavigate(); 

  return (
   <>
    {setIsLoggedIn(false)}
    {setProfileId(null)}
    {/* {
        isLoggedIn && profileId && 
        navigate("/")
    } */}
    {navigate("/")}
   </>
  )
}

export default Logout
