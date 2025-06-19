
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SocialMediaIcons from '../ShareIcons/ShareIcons'


function Layout() {
  return (
    <div>
    
        {/* <Navbar/> */}
        {/* <SocialMediaIcons/> */}
        <Outlet/>
        {/* <Footer/> */}
      
    </div>
  )
}

export default Layout
