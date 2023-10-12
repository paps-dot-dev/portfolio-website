import React from 'react'
import placeholder from '../../assets/placeholder.png'

function Home() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <div className=' '>
        <img className='rounded-full w-full' src={placeholder} />
      </div>
      <h1 className='text-2xl'>Big Fat Thumb</h1>
    </main>
  )
}

export default Home
