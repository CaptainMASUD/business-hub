
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import LayoutWrapper from './layout-wrapper'



function Layout() {
  return (
    <div>
    <LayoutWrapper>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </LayoutWrapper>
    </div>
  )
}

export default Layout
