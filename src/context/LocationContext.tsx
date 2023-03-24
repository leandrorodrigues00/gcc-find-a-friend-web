import { createContext, ReactNode } from 'react'

interface LocationContextType {}

interface CartContextProviderProps {
  children: ReactNode
}

export const LocationContext = createContext({} as LocationContextType)

export function LocationProvider({ children }: CartContextProviderProps) {
  return (
    <LocationContext.Provider value={{}}>{children}</LocationContext.Provider>
  )
}
