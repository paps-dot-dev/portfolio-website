import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from './ProjectCard'
import projects from '../../../projects'

import 'swiper/css'

function ProjectSwiper() {
  return (
    <Swiper
      className='mt-16 w-full pl-2'
      spaceBetween={50}
      slidesPerView={1.6}
      onSlideChange={() => console.log('slideChange')}
      onSwiper={(swiper) => console.log(swiper)}>
      {projects.map((project) => (
        <SwiperSlide
          key={project.id}
          className='bg-gray-500 bg-opacity-40 rounded-xl h-[450px] lg:h-[600px] flex flex-col justify-center items-center'>
          <ProjectCard
            image={project.image}
            name={project.name}
            github={project.githubURL}
            technologies={project.technologies}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectSwiper
