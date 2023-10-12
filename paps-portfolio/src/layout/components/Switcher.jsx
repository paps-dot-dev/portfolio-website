import React from 'react'
import { FaLightbulb } from 'react-icons/fa'

function Switcher({ toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className='text-sm bg-slate-600 rounded-md p-2 text-white hover:-translate-y-1 ease-linear duration-200
          '>
      <FaLightbulb className='inline' />
      <span>Turn Out the Lights</span>
    </button>
  )
}

export default Switcher
