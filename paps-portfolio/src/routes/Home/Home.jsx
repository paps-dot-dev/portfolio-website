import React, { useEffect, useState } from 'react'
import headshot from '../../assets/headshot.jpeg'
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

function Home({ dark, projects }) {
  return (
    <main className='flex flex-col justify-center items-center'>
      <div className='p-4 ring-1 ring-white rounded-full bg-slate-200 bg-opacity-50'>
        <img className='rounded-full h-48 w-48' src={headshot} />
      </div>
      <div className='flex flex-col justify-between items-center mt-4'>
        <h1 className='font-semibold text-3xl'>Shawn "Paps" Papineau</h1>
        <div className='text-2xl flex justify-between items-center w-[250px] p-4'>
          <a
            href='tel:586-601-5723'
            className='hover:border-2 hover:border-indigo-700 rounded-full p-2 hover:-translate-y-2 ease-linear duration-200 hover:text-indigo-700'>
            <MdPhoneIphone />
          </a>
          <a
            href='mailto:s_papineau@outlook.com'
            target='_blank'
            className='hover:border-2 hover:border-indigo-700 rounded-full p-2 hover:-translate-y-2 ease-linear duration-200 hover:text-indigo-700'>
            <MdEmail />
          </a>
          <a
            href='https://solo.to/shawn.paps'
            target='_blank'
            className='hover:border-2 hover:border-indigo-700 rounded-full p-2 hover:-translate-y-2 ease-linear duration-200 hover:text-indigo-700 '>
            <SiLinktree />
          </a>
          <a
            href='https://www.linkedin.com/in/shawn-papineau/'
            target='_blank'
            className='hover:border-2 hover:border-indigo-700 rounded-full p-2 hover:-translate-y-2 ease-linear duration-200 hover:text-indigo-700'>
            <SiLinkedin />
          </a>
          <a
            href='https://www.instagram.com/shawn.paps'
            target='_blank'
            className='hover:border-2 hover:border-indigo-700 rounded-full p-2 hover:-translate-y-2 ease-linear duration-200 hover:text-indigo-700'>
            <SiInstagram />
          </a>
          <a
            className='hover:border-2 hover:border-indigo-700 rounded-full p-2 hover:-translate-y-2 ease-linear duration-200 hover:text-indigo-700'
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
            <p>I am a Web Developer and UI Designer.</p>

            <p className='font-semibold'>Creatively innovating with code.</p>
          </div>
        </div>
      </div>
      <ProjectSwiper projects={projects} />
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
      <div className='flex flex-col xl:flex-row justify-between m-auto w-5/6 lg:w-10/12'>
        <div className='grid grid-cols-4 gap-10 text-5xl mt-24 bg-indigo-600 p-8 bg-opacity-30 rounded-lg drop-shadow-lg min-w-[30%] xl:mx-4'>
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
        <div className='grid grid-cols-4 gap-10 text-5xl mt-24 bg-blue-600 p-8 bg-opacity-30 rounded-lg drop-shadow-lg min-w-[30%] xl:mx-4'>
          <p className='col-span-4 text-2xl text-center font-semibold'>
            Data Technologies
          </p>
          <SiMicrosoftazure />
          <FaAws />
          <IoLogoFirebase />
          <FaPython />
        </div>
        <div className='grid grid-cols-4 gap-10 text-5xl mt-24 bg-green-600 p-8 bg-opacity-30 rounded-lg drop-shadow-lg xl:mx-4'>
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
