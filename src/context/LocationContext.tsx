import { PetsProps } from '@/components/Aside'
import { API_BASE_URL } from '@/config'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface StatesApiProps {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

interface StatesApiResponse {
  states: StatesApiProps[]
}

interface CitiesApiProps {
  name: string
  code: string
}

interface CitiesApiResponse {
  citys: CitiesApiProps[]
}

interface SelectInfosProps {
  value: string
  label: string
}

interface LocationFormValues {
  state: string
  city: string
}

interface CoordinatesMapProps {
  latitude: string
  longitude: string
}

interface LocationContextType {
  statesList: SelectInfosProps[]
  citiesList: SelectInfosProps[]
  isFetching: boolean
  formValues: {
    state: string
    city: string
  }
  filteredAnimalsCity?: PetsProps[]

  orgCoordinates: CoordinatesMapProps
  setFormValues: React.Dispatch<React.SetStateAction<LocationFormValues>>
  setFilteredAnimalsCity: React.Dispatch<React.SetStateAction<PetsProps[]>>
  setOrgCoordinates: React.Dispatch<React.SetStateAction<CoordinatesMapProps>>
}

interface CartContextProviderProps {
  children: ReactNode
}

export const LocationContext = createContext({} as LocationContextType)

export function LocationProvider({ children }: CartContextProviderProps) {
  const [statesList, setStatesList] = useState<SelectInfosProps[]>([])
  const [citiesList, setCitiesList] = useState<SelectInfosProps[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [formValues, setFormValues] = useState({
    state: '',
    city: '',
  })
  const [orgCoordinates, setOrgCoordinates] = useState<CoordinatesMapProps>({
    latitude: '',
    longitude: '',
  })
  const [filteredAnimalsCity, setFilteredAnimalsCity] = useState<PetsProps[]>(
    [],
  )

  async function fetchData<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        return json
      } else {
        throw new Error(
          `Error fetching data from URL ${url}. Response status: ${response.status}`,
        )
      }
    } catch (error) {
      if (error instanceof Error)
        console.error(
          `Error fetching data from URL ${url}. Message: ${error.message}`,
        )
      return null
    }
  }

  useEffect(() => {
    async function handleStateData() {
      const data = await fetchData<StatesApiResponse>(
        `${API_BASE_URL}/location/states`,
      )
      if (!data) return

      const stateInfo = data.states.map(({ sigla }) => ({
        value: sigla,
        label: sigla,
      }))

      setStatesList(stateInfo)
    }
    handleStateData()
  }, [])

  useEffect(() => {
    if (formValues.state) {
      async function handleCitiesData() {
        setIsFetching(true)
        const data = await fetchData<CitiesApiResponse>(
          `${API_BASE_URL}/location/citys/${formValues.state}`,
        )

        setIsFetching(false)

        if (!data) return

        const CityInfo = data.citys.map(({ name }) => ({
          value: name,
          label: name,
        }))

        setCitiesList(CityInfo)
      }

      handleCitiesData()
    }
  }, [formValues.state])

  return (
    <LocationContext.Provider
      value={{
        statesList,
        citiesList,
        setFormValues,
        formValues,
        isFetching,
        filteredAnimalsCity,
        setFilteredAnimalsCity,
        orgCoordinates,
        setOrgCoordinates,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
