import { useState } from 'react'
import './index.css'
import MainPage from './pages/Main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/nosotros' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}


export default App
