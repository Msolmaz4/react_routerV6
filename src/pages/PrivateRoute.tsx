import React from 'react'
import { useAuth } from '../components/context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const { user} = useAuth()

  if(!user){
    return <Navigate to='/login'/>

  }
  return (
    <div>
       {children} 
    </div>
  
  )
}

export default PrivateRoute