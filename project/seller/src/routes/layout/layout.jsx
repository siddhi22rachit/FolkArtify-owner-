import React from 'react'
import HomePage from '../homePage/homePage'
import "./layout.css"
import Navbar from '../../component/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
