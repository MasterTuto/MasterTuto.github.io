import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

const MainLayout = () => {
  return (
    <div className="w-screen h-screen overflow-auto bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col">
      <NavBar />

      <div className='px-2 pb-20 py-5 sm:px-4 md:px-7 lg:px-10 xl:px-12 max-w-screen-2xl w-screen self-center justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout