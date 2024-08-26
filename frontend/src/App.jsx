import './index.css'
import MainPage from './pages/Main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './pages/News';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/noticias' element={<News />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}


export default App
