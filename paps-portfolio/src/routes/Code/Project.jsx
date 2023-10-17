import React from 'react'
import { useParams } from 'react-router-dom'
function Project() {
  const params = useParams()

  return <main>{params.id}</main>
}

export default Project
