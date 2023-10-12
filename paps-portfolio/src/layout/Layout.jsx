import React from 'react'
import Navbar from './components/Navbar'

function Layout({ children, toggleTheme, dark }) {
  return (
    <div
      className={
        dark ? 'bg-slate-600 text-white h-screen' : 'bg-white h-screen'
      }>
      <Navbar toggleTheme={toggleTheme} />

      {children}
      <footer className='sticky top-[100vh]'>
        Copyright Shawn Papineau © 2023{' '}
      </footer>
    </div>
  )
}

export default Layout
