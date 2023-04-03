import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { PetDetails } from '@/pages/PetDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pet-details/:id" element={<PetDetails />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  )
}
