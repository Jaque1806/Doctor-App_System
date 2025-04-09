
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import MyAppointments from './pages/MyAppointments'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import TopDoctors from './components/TopDoctors'
import Speciality from './components/SpecialityMenu'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/myappointments' element={<MyAppointments/>}/>
        <Route path='/topdoctors' element={<TopDoctors/>}/>
        <Route path='/specialitymenu' element={<Speciality/>}/>
      </Routes>
    <Footer />
    </div>
  )
}

export default App