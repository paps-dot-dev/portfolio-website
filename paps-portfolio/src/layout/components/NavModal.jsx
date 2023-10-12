import React from 'react'
import {
  FaCode,
  FaCodeBranch,
  FaMapMarked,
  FaMinus,
  FaTimesCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NavModal({ toggleNav }) {
  return (
    <nav className='h-screen bg-rose-800 absolute top-0 overflow-y-scroll w-screen z-10'>
      <FaMinus onClick={toggleNav} className='text-3xl m-2' />
      <div>
        <div className='flex justify-between items-center mb-8 p-4'>
          <p className='font-light'>Shawn Papineau</p>
          <div>
            <FaMapMarked className='text-[8em] bg-slate-800 rounded-full p-3 border-2 m-auto' />
            <p className='text-center font-bold text-2xl'>Navigation</p>
          </div>
          <p className='font-light'>Software Developer</p>
        </div>
        <div className='w-1/4 ml-auto text-3xl p-2'>
          <Link className='flex justify-center items-center' to={'/'}>
            <FaCode className='mx-2' />
            <p>Code</p>
          </Link>
          <Link className='flex justify-center items-center' to={'/'}>
            <FaCode className='mx-2' />
            <p>Code</p>
          </Link>
          <Link className='flex justify-center items-center' to={'/'}>
            <FaCode className='mx-2' />
            <p>Code</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavModal
