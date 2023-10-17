import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from './ProjectCard'

import 'swiper/css'
import { FaAngleDoubleLeft } from 'react-icons/fa'

function ProjectSwiper({ projects }) {
  return (
    <>
      <div className='flex items-center text-2xl mr-auto font-light px-8 pt-8'>
        <FaAngleDoubleLeft />
        <h3 className='mx-2'>Swipe To See More!</h3>
      </div>
      <Swiper
        className='mt-8 w-full pl-2'
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
              id={project.id}
              name={project.name}
              github={project.githubURL}
              technologies={project.technologies}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProjectSwiper
