
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioBodas from './pages/PortfolioBodas'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Layout from './components/Layout';
import Videos from './pages/Videos'
import About from './pages/About'
import Contacto from './pages/Contacto'

function App() {


  return (
    <div className='min-h-[100vh]' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/videos' element={<Layout><Videos /></Layout>} />
          <Route path='/PortfolioBodas' element={<Layout><PortfolioBodas /></Layout>} />
          <Route path='/PortfolioBodas/:slug' element={<Layout showNavbar={false}><PostDetail /></Layout>}/>
          <Route path='/sobre-mi' element={<Layout><About /></Layout>} />
          <Route path='/contacto' element={<Layout><Contacto /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;