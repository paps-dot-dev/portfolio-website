import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './routes/Home/Home'
import Code from './routes/Code/Code'
import { useState } from 'react'
import Project from './routes/Code/Project'

function App() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
  }
  return (
    <>
      <Router>
        <Layout dark={dark} toggleTheme={toggleTheme}>
          <Routes>
            <Route path='/' element={<Home dark={dark} />} />
            <Route path='/code' element={<Code dark={dark} />}></Route>
            <Route path='/projects/:id' element={<Project />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
