import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { PetDetails } from '@/pages/PetDetails'
import { PetCreate } from '@/pages/PetCreate'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/pet-details/:id" element={<PetDetails />} />
      <Route path="/pet-create" element={<PetCreate />} />
    </Routes>
  )
}
