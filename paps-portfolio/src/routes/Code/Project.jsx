import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Project({ projects }) {
  const params = useParams()
  const [project, setProject] = useState({})

  useEffect(() => {
    const currentProject = projects.filter((project) => project.id == params.id)

    console.log(currentProject)

    setProject(currentProject)
    console.log(project)
  }, [])

  return (
    <main>
      <h1>{project[0].name}</h1>
      <p>{project[0].summary}</p>
    </main>
  )
}

export default Project
