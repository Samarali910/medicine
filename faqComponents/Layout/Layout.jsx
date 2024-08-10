import React from 'react'
import { Outlet } from 'react-router-dom'
import FaqHero from '../FaqHero'
const Layout = () => {
  return (
    <>
        <FaqHero/>
        <Outlet/>
    </>
  )
}

export default Layout