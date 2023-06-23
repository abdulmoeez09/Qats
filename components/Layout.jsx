import React from 'react'
import Header from './Header'
import {Footer} from './Footer'
// import Navbar from './Navbar'
// import Navbarmenu from './Navbarmenu'

 const Layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}
export default Layout
