import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PickUp from '../pages/PickUp'
import Recycling from '../pages/Recycling'
import MainLayout from '../layouts/MainLayout'
import WastetoEnergy from '../pages/WastetoEnergy'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/pickup' element={<PickUp />} />
            <Route path='/recycling' element={<Recycling />} />
            <Route path='/wastetoenergy' element={<WastetoEnergy />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes