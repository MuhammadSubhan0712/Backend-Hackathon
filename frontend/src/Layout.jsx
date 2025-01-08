import React from 'react'
import { Outlet } from 'react-router-dom'
import Register from './Pages/Register'
import { Home } from 'lucide-react';

const Layout = () => {
    console.log("Layout");
    
  return (
    <>
    <Outlet/>

    </>
  )
}

export default Layout