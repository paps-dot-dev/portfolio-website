import React from 'react'
import { FaGithub } from 'react-icons/fa'

function ProjectCard({ project }) {
  return (
    <div className='p-[32px] w-4/5'>
      <img
        className=' h-[200px] lg:h-[400px] w-full rounded-xl'
        src={project.image}
      />

      <div className='flex justify-between items-center lg:py-4'>
        <p className='font-light text-xl lg:text-2xl p-4'>{project.name}</p>
        <p className='bg-indigo-700 text-white p-2 rounded-full px-4 lg:px-8 font-semibold'>
          {project.technologies[0]}
        </p>
      </div>

      <a
        href={project.githubURL}
        target='_blank'
        className='flex justify-center items-center p-3 bg-indigo-700 rounded-lg text-slate-200 text-sm font-semibold m-auto hover:-translate-y-1 ease-linear duration-100 hover:bg-gradient-to-br from-indigo-500 to purple-500'>
        <FaGithub className='mx-2 text-xl' />
        <p className='mx-2'>Show me the Code!</p>
      </a>
    </div>
  )
}

export default ProjectCard
