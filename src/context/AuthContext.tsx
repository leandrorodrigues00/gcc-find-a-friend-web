import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthContextContextType {
  token: string | null
  setToken: (token: string | null) => void
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthContext = createContext({} as AuthContextContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  )

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
