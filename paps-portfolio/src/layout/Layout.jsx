import React from 'react'
import Navbar from './components/Navbar'

function Layout({ children, toggleTheme, dark }) {
  return (
    <div
      className={`${
        dark ? 'text-white  bg-darkHero' : 'bg-lightHero'
      } bg-cover bg-repeat-y`}>
      <Navbar dark={dark} toggleTheme={toggleTheme} />

      {children}
      <footer className='sticky top-[100vh]'>
        Copyright Shawn Papineau © 2023{' '}
        <p>
          Background Photo by{' '}
          <a href='https://unsplash.com/@evieshaffer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Evie S.
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/photos/kBzQNk9AgOg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Unsplash
          </a>
        </p>
        <p>
          Photo by{' '}
          <a href='https://unsplash.com/@alifmt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            ALIF MOHAMMED
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/photos/gAzTwSiAPUA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
