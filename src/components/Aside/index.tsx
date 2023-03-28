import logo from '@/assets/icons/logo-mapPage.svg'
import search from '@/assets/icons/search.svg'
import { LocationContext } from '@/context/LocationContext'
import { ChangeEvent, useCallback, useContext } from 'react'
import { Select } from '../Select'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'

const ageOptions = [
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
const energyOptions = [
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
const sizeOptions = [
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
const independencyOptions = [
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

export interface PetsProps {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: string
  size: string
  independence: string
  type: 'dog' | 'cat'
  photo: string
  orgId: string
  photo_url: string
}

const API_BASE_URL = 'http://localhost:3333'

export function Aside() {
  const {
    statesList,
    citiesList,
    setFormValues,
    formValues,
    setFilteredAnimalsCity,
  } = useContext(LocationContext)

  async function handleSearchPets() {
    const data = await fetch(`${API_BASE_URL}/pets/${formValues.city}`)
    const { pets }: { pets: PetsProps[] } = await data.json()
    setFilteredAnimalsCity(pets)
  }

  // function handleChangeSearchFilters() {
  //   // TO DO
  // }

  const handleChangeState = useCallback((stateValue: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      state: stateValue,
    }))
  }, [])

  const handleChangeCity = useCallback((cityValue: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      city: cityValue,
    }))
  }, [])

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
              <img src={search} alt="ícone de lupa" />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select name="age" label="Idade" options={ageOptions} />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
          />

          <Select name="size" label="Porte do animal" options={sizeOptions} />

          <Select
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
