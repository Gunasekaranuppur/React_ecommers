

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Heater from './component/Heater'
import Home from './pages/Home'

function App() {


  return (
    <>
    <Heater/>
 <Routes>
        <Route path="/" element={<Home />} />
     
      </Routes>
    <Footer/>
   
    </>
  )
}

export default App
