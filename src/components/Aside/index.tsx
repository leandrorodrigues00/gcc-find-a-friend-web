import { ChangeEvent, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { usePlace } from '@/context/LocationContext'
import { API_BASE_URL } from '@/config'
import { Select } from '../Form/Select'

import logo from '@/assets/icons/logo-mapPage.svg'
import search from '@/assets/icons/search.svg'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'

export const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
export const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
export const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
export const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

export interface PetsApiProps {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: string
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photo: string
  orgId: string
  photo_url: string
}

export interface PetsApiResponse {
  pets: PetsApiProps[]
}

interface Filters {
  age: string
  energy: string
  size: string
  independence: string
  type: string
}

interface AsideProps {
  filters: Filters
  handleChangeFilterPet: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function Aside({ filters, handleChangeFilterPet }: AsideProps) {
  const {
    statesList,
    citiesList,
    setFormValues,
    formValues,
    setFilteredAnimalsCity,
    filteredAnimalsCity,
    fetchData,
  } = usePlace()

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const cityParams = params.get('city')

  function buildSearchParams(filters: Filters) {
    const searchParams = new URLSearchParams()
    if (filters.age) searchParams.append('age', filters.age)
    if (filters.energy) searchParams.append('energy', filters.energy)
    if (filters.size) searchParams.append('size', filters.size)
    if (filters.independence)
      searchParams.append('independence', filters.independence)
    if (filters.type) searchParams.append('type', filters.type)
    return searchParams
  }

  async function handleSearchPets() {
    const searchParams = buildSearchParams(filters)
    const data = await fetchData<PetsApiResponse>(
      `${API_BASE_URL}/pets/${formValues.city}?${searchParams}`,
    )

    if (!data) return
    setFilteredAnimalsCity(data.pets)
  }

  const handleChangeState = useCallback(
    (stateValue: string) => {
      setFormValues((prevValues) => ({
        ...prevValues,
        state: stateValue,
      }))
    },
    [setFormValues],
  )

  const handleChangeCity = useCallback(
    (cityValue: string) => {
      setFormValues((prevState) => ({
        ...prevState,
        city: cityValue,
      }))
    },
    [setFormValues],
  )

  useEffect(() => {
    if (citiesList?.length > 0) {
      setFormValues((prevValues) => ({
        ...prevValues,
        city: citiesList[0].label,
      }))
    }
  }, [citiesList, setFormValues])

  useEffect(() => {
    if (cityParams) {
      setFormValues((prevState) => ({
        ...prevState,
        city: cityParams,
      }))
    }

    if (filteredAnimalsCity && filteredAnimalsCity.length > 0) {
      return setFilteredAnimalsCity(filteredAnimalsCity)
    }

    handleSearchPets()
  }, [cityParams, setFormValues])

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <Select
              name={''}
              options={statesList}
              value={formValues.state}
              onChange={(stateValue: ChangeEvent<HTMLInputElement>) =>
                handleChangeState(stateValue.target.value)
              }
            />
            <Select
              name={''}
              options={citiesList}
              value={formValues.city}
              onChange={(cityValue: ChangeEvent<HTMLInputElement>) =>
                handleChangeCity(cityValue.target.value)
              }
            />
            <button onClick={handleSearchPets}>
              <img src={search} alt="Botão para busca de pets" />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            label="Idade"
            options={ageOptions}
            value={filters.age}
            onChange={handleChangeFilterPet}
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            value={filters.energy}
            onChange={handleChangeFilterPet}
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            value={filters.size}
            onChange={handleChangeFilterPet}
          />

          <Select
            name="independence"
            label="Nível de independência"
            options={independencyOptions}
            value={filters.independence}
            onChange={handleChangeFilterPet}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
