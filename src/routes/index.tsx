import { ReactNode } from 'react'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { PetDetails } from '@/pages/PetDetails'
import { PetCreate } from '@/pages/PetCreate'
import { useAuth } from '@/context/AuthContext'

export function Router() {
  const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAuth()
    console.log(isAuthenticated)

    return isAuthenticated ? <Navigate to="/" /> : <>{children}</>
  }

  const PrivateRoute2 = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAuth()
    console.log(isAuthenticated)

    return isAuthenticated ? <>{children}</> : <Navigate to="/" />
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route
        path="/login"
        element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        }
      />
      <Route path="/pet-details/:id" element={<PetDetails />} />
      <Route
        path="/pet-create"
        element={
          <PrivateRoute2>
            <PetCreate />
          </PrivateRoute2>
        }
      />
    </Routes>
  )
}
