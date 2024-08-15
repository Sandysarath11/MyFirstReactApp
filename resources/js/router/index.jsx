import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/home'
import About from '../components/about'
import NotFound from '../components/notfound'

const index = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default index
