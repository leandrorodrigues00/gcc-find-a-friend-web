import { API_BASE_URL } from '@/config'
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

  async function refreshAuthToken() {
    const apiUrl = `${API_BASE_URL}/auth/refresh-token`
    console.log(`Bearer ${localStorage.getItem('token')}`)

    try {
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error(
          `Error making request to ${apiUrl}. Status code: ${response.status}.`,
        )
      }

      const json = await response.json()
      localStorage.setItem('token', json.token)

      return json.token
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `An error occurred while making the request to ${apiUrl}. Error message:  ${error.message}`,
        )
      }
    }
  }

  const isAuthenticated = !!token

  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      if (isAuthenticated) {
        refreshAuthToken()
      }
    }, 5 * 60 * 1000) // 5 minutes

    return () => clearInterval(refreshTokenInterval)
  }, [isAuthenticated])

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
