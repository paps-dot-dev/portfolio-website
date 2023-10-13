import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaReact,
} from 'react-icons/fa'
import Switcher from './Switcher'
import NavModal from './NavModal'
function Navbar({ toggleTheme, dark }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='min-h-[100px]'>
      <nav className='flex flex-row justify-between items-center '>
        <FaReact
          onClick={toggleNav}
          className={`${
            dark ? 'text-white' : 'text-indigo-600'
          } text-[4em] animate-spin-slow cursor-pointer p-2`}
        />
        <div className='flex flex-row justify-between items-center text-3xl'>
          <a href='https://www.instagram.com/paps_audio' target='_blank'>
            <FaInstagram />
          </a>
          <a
            className='mx-2'
            href='https://github.com/paps-dot-dev'
            target='_blank'>
            <FaGithub />
          </a>
          <Switcher dark={dark} toggleTheme={toggleTheme} />
        </div>
      </nav>
      {isOpen && <NavModal toggleNav={toggleNav} />}
    </header>
  )
}

export default Navbar
