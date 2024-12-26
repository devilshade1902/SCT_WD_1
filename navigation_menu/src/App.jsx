import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Aboutus from './pages/aboutus/Aboutus'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
