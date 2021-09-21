import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  
  
  
  
  
  return (
    <>
    {currentUser && <h1>{currentUser.email}</h1>}
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect exact path ="/" />
      }}
    ></Route>
    </>
  )
}
