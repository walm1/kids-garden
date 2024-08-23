import { useState } from 'react'
import './index.css'
import MainPage from './pages/Main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/nosotros' element={<AboutUs />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/noticias' element={<News />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}


export default App
