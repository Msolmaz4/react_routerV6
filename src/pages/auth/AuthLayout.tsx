import React from 'react'
// alt sayfalari yuklemk icin outlet kullaniriy
import { Outlet } from 'react-router-dom'
const AuthLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthLayout