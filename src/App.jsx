import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WhatWeTeach from './pages/WhatWeTeach'
import Academics from './pages/Academics'
import Faculty from './pages/Faculty'

const App = () => {
  
  return (
    <div className='h-screen w-full bg-zinc-900 px-5 '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/what-we-teach' element={<WhatWeTeach />} />
        <Route path='/*' element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App