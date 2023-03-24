import { createContext, ReactNode, useEffect, useState } from 'react'

interface SelectInfosProps {
  value: string | number
  label: string
}

interface LocationContextType {
  statesList: SelectInfosProps[]
}

interface CartContextProviderProps {
  children: ReactNode
}

interface StatesProps {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

export const LocationContext = createContext({} as LocationContextType)

const API_BASE_URL = 'http://localhost:3333'

export function LocationProvider({ children }: CartContextProviderProps) {
  const [statesList, setStatesList] = useState<SelectInfosProps[]>([])

  useEffect(() => {
    async function getStatesData() {
      try {
        const data = await fetch(`${API_BASE_URL}/location/states`)
        const { states }: { states: StatesProps[] } = await data.json()

        const stateInfo = states.map(({ sigla }) => ({
          value: sigla,
          label: sigla,
        }))
        setStatesList(stateInfo)
      } catch (error) {
        // TODO toast
        console.error(error)
      }
    }
    getStatesData()
  }, [])

  return (
    <LocationContext.Provider value={{ statesList }}>
      {children}
    </LocationContext.Provider>
  )
}
