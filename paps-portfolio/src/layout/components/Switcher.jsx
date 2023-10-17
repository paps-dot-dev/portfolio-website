import React from 'react'
import { FaLightbulb } from 'react-icons/fa'

function Switcher({ toggleTheme, dark }) {
  return (
    <button
      onClick={toggleTheme}
      className='text-sm bg-slate-600 rounded-md p-2 text-white hover:-translate-y-1 ease-linear duration-200 hover:bg-black hover:text-yellow-300
          '>
      <FaLightbulb className='inline' />
      <span>{dark ? 'Turn On the Lights' : 'Turn Off the Lights'}</span>
    </button>
  )
}

export default Switcher
