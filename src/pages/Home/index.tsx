import {
  Container,
  FooterHero,
  Hero,
  Introduction,
  SelectInputs,
} from './styles'
import logo from '../../assets/icons/logo.svg'
import Dogs from '../../assets/images/heroDogs.svg'
import search from '../../assets/icons/search.svg'
import { Select } from '@/components/Select'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

interface SelectInfosProps {
  value: string | number
  label: string
}

const API_BASE_URL = 'http://localhost:3333'

export function Home() {
  const [statesList, setStatesList] = useState<SelectInfosProps[]>([])
  const [citiesList, setCitiesList] = useState<SelectInfosProps[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [formValues, setFormValues] = useState({
    state: '',
    city: '',
  })
  const navigate = useNavigate()

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

  useEffect(() => {
    if (formValues.state) {
      async function getCitiesData() {
        setIsFetching(true)
        try {
          const data = await fetch(
            `${API_BASE_URL}/location/citys/${formValues.state}`
          )
          if (!data.ok) {
            throw new Error(
              // TODO toast
              `Failed to fetch cities (${data.status} ${data.statusText})`
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

  function handleSearchPets() {
    navigate(`/map?state=${formValues.state}&city=${formValues.city}`)
  }

  return (
    <Container>
      <Hero>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <Introduction>
          <p>
            Leve <br />a felicidade
            <br /> para o seu lar
          </p>

          <div>
            <img src={Dogs} alt="" />
          </div>
        </Introduction>

        <FooterHero>
          <p>Encontre seu animal de estimação ideal para seu estilo de vida!</p>

          <SelectInputs>
            <span>Busque um amigo:</span>
            <Select
              options={statesList}
              label={''}
              name="states"
              onChange={(stateValue: ChangeEvent<HTMLInputElement>) =>
                handleChangeState(stateValue.target.value)
              }
            />
            <Select
              options={citiesList}
              label={''}
              name={'cities'}
              disabled={!formValues.state || isFetching}
              onChange={(cityValue: ChangeEvent<HTMLInputElement>) =>
                handleChangeCity(cityValue.target.value)
              }
            />

            <button onClick={handleSearchPets}>
              <img src={search} alt="" />
            </button>
          </SelectInputs>
        </FooterHero>
      </Hero>
    </Container>
  )
}
