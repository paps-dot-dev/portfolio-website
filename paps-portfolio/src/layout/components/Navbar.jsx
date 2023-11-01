import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaBeer,
  FaGithub,
  FaHockeyPuck,
  FaInstagram,
  FaInstagramSquare,
  FaReact,
  FaRecordVinyl,
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
      <nav className='flex flex-row justify-between items-center p-8 '>
        <FaHockeyPuck
          onClick={toggleNav}
          className={`${
            dark
              ? 'text-white hover:text-blue-500 ease-linear duration-200'
              : 'text-indigo-600 opacity-50 hover:text-black hover:opacity-100 ease-linear duration-200'
          } text-[4em]  cursor-pointer p-2`}
        />
        <div className='flex flex-row justify-between items-center text-3xl'>
          <Switcher dark={dark} toggleTheme={toggleTheme} />
        </div>
      </nav>
      {isOpen && <NavModal toggleNav={toggleNav} />}
    </header>
  )
}

export default Navbar
