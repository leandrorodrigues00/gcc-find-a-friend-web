import { PetsProps } from '@/components/Aside'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface SelectInfosProps {
  value: string | number
  label: string
}

interface LocationFormValues {
  state: string
  city: string
}

export interface CoordinatesMapProps {
  latitude: string
  longitude: string
}

interface LocationContextType {
  statesList: SelectInfosProps[]
  citiesList: SelectInfosProps[]
  isFetching: boolean
  filteredAnimalsCity?: PetsProps[]
  formValues: {
    state: string
    city: string
  }
  orgCoordinates: CoordinatesMapProps
  setFormValues: React.Dispatch<React.SetStateAction<LocationFormValues>>
  setFilteredAnimalsCity: React.Dispatch<React.SetStateAction<PetsProps[]>>
  setOrgCoordinates: React.Dispatch<React.SetStateAction<CoordinatesMapProps>>
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

interface CitiesProps {
  name: string
  code: string
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

  useEffect(() => {
    async function getStatesData() {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/location/states`,
        )
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

  useEffect(() => {
    if (formValues.state) {
      async function getCitiesData() {
        setIsFetching(true)
        try {
          const data = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/location/citys/${
              formValues.state
            }`,
          )
          if (!data.ok) {
            throw new Error(
              // TODO toast
              `Failed to fetch cities (${data.status} ${data.statusText})`,
            )
          }
          const { citys }: { citys: CitiesProps[] } = await data.json()

          const citysInfo = citys.map(({ name }) => ({
            value: name,
            label: name,
          }))

          setCitiesList(citysInfo)
          setIsFetching(false)
        } catch (error) {
          console.error(error)
        }
      }
      getCitiesData()
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
