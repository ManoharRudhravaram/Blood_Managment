import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HomePage() {
  function navigateLink({isActive}){
    return {
      color:isActive ? "blue" : 'black',
      textDecoration:'none',
      fontSize:isActive&&'20px'
    }
  }
  return (
    <>
    <div style={{height:"50px",border:"1px solid",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
      <NavLink style={navigateLink} to={'/register'}>Register</NavLink>
      <NavLink style={navigateLink} to={'/login'}>Login</NavLink>
    </div>
    <div style={{minHeight:"70vh"}}>
      <Outlet/>
    </div>
    </>
  )
}
