

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Heater from './component/Heater'
import Home from './pages/Home'
import ProtectedRoute from './component/ProtectedRoute'

function App() {


  return (
    <>
      <Heater />
      <Routes>
        <Route path="/" element={<Home />} />


  <Route path="admin" element={<ProtectedRoute />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="profile" element={<Profile />} />
    <Route path="orders" element={<Orders />} />
    <Route path="settings" element={<Settings />} />
  </Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App
