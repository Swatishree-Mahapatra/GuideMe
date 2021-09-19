import React,{ useRef } from "react"
import { useAuth } from "../firebase/AuthContext"
import { Avatar } from "@mui/material"

export default function UserCircle() {
  const { currentUser } = useAuth()

  
  console.log(currentUser)

  return(
    <>
        {currentUser && <Avatar>{currentUser.email[0]}</Avatar>}
    </>
  )

}