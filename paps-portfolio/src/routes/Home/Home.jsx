import React from 'react'
import placeholder from '../../assets/placeholder.jpg'
import ProjectSwiper from './components/ProjectSwiper'
import {
  FaAngleDoubleLeft,
  FaAngular,
  FaApple,
  FaAws,
  FaCss3,
  FaDatabase,
  FaFigma,
  FaGoogle,
  FaHtml5,
  FaJsSquare,
  FaLaptop,
  FaLinux,
  FaMicrosoft,
  FaPaperPlane,
  FaPhoneAlt,
  FaPhotoVideo,
  FaPython,
  FaReact,
  FaVuejs,
  FaWordpress,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa'

import { MdEmail, MdLink, MdPhoneIphone } from 'react-icons/md'
import { IoLogoVercel, IoLogoFirebase } from 'react-icons/io5'
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiLinktree,
  SiMicrosoftazure,
  SiSololearn,
} from 'react-icons/si'

function Home({ dark }) {
  return (
    <main className='flex flex-col justify-center items-center'>
      <div className='p-4 ring-1 ring-white rounded-full bg-slate-200 bg-opacity-50'>
        <img className='rounded-full h-48 w-48' src={placeholder} />
      </div>
      <div className='flex flex-col justify-between items-center mt-4'>
        <h1 className='font-semibold text-3xl'>Shawn "Paps" Papineau</h1>
        <div className='text-2xl flex justify-between items-center w-[250px] p-4'>
          <a href='tel:586-601-5723'>
            <MdPhoneIphone />
          </a>
          <a href='mailto:s_papineau@outlook.com' target='_blank'>
            <MdEmail />
          </a>
          <a href='https://www.solo.to/developed.by.paps' target='_blank'>
            <SiLinktree />
          </a>
          <a href='https://www.linkedin.com/in/shawn-papineau/' target='_blank'>
            <SiLinkedin />
          </a>
          <a href='https://www.instagram.com/paps_audio' target='_blank'>
            <SiInstagram />
          </a>
          <a
            className='mx-2'
            href='https://github.com/paps-dot-dev'
            target='_blank'>
            <SiGithub />
          </a>
        </div>

        <div className='bg-gray-500 bg-opacity-25 rounded-xl p-4 mt-16'>
          <div
            className={`${
              dark ? 'from-blue-400 to-white' : 'from-gray-800 to-indigo-600'
            } text-[2em] text-center bg-gradient-to-br text-transparent bg-clip-text font-light`}>
            <p>I am a Web Developer and UI/UX Designer.</p>
            <p className='font-semibold'>Creatively innovating with code.</p>
          </div>
        </div>
      </div>
      <h3>Swipe to see more</h3>
      <ProjectSwiper />
      <h3 className='font-bold text-6xl lg:text-8xl mt-32'>#FullyStacked</h3>
      <p className='p-4 lg:w-1/3 text-sm font-medium  mt-4 mb-2 rounded-lg m-auto bg-slate-400 bg-opacity-30 text-center '>
        I am strongly knowledgable in a variety of different technologies,
        making your project run smooth from product design to product
        deployment.
      </p>
      <a
        href='mailto:s_papineau@outlook.com'
        target='email'
        className='flex justify-center items-center p-4  ring-2 ring-indigo-400 mt-4 rounded-md w-[300px] text-center bg-gradient-to-br from-indigo-700 to-indigo-500 text-white font-semibold hover:ring-purple-300 hover:-translate-y-2 ease-linear duration-200'>
        <p>Contact Me!</p>
        <FaPaperPlane className='inline m-2' />
      </a>
      <div className='flex flex-col lg:flex-row justify-between m-auto w-4/5 lg:w-10/12'>
        <div className='grid grid-cols-4 gap-10 text-5xl mt-24 bg-indigo-600 p-8 bg-opacity-30 rounded-lg drop-shadow-lg'>
          <p className='col-span-4 font-semibold text-2xl text-center'>
            Web Technologies
          </p>
          <FaJsSquare />
          <FaHtml5 />
          <FaCss3 />
          <FaReact />
          <FaAngular />
          <FaVuejs />
          <FaWordpress />
          <IoLogoVercel />
        </div>
        <div className='grid grid-cols-4 gap-10 text-5xl mt-24 bg-blue-600 p-8 bg-opacity-30 rounded-lg drop-shadow-lg'>
          <p className='col-span-4 text-2xl text-center font-semibold'>
            Data Technologies
          </p>
          <SiMicrosoftazure />
          <FaAws />
          <IoLogoFirebase />
          <FaPython />
        </div>
        <div className='grid grid-cols-4 gap-10 text-5xl mt-24 bg-green-600 p-8 bg-opacity-30 rounded-lg drop-shadow-lg'>
          <p className='col-span-4 text-2xl text-center font-semibold'>
            Other Technologies
          </p>
          <div className='flex flex-col items-center'>
            <FaDatabase />
            <p className='text-sm'>SQL</p>
          </div>
          <p>C++</p>
          <FaFigma />
          <FaApple />
          <div></div>
          <FaMicrosoft />
          <FaLinux />
        </div>
      </div>
    </main>
  )
}

export default Home
