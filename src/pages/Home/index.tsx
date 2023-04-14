import { ChangeEvent, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Select } from '@/components/Form/Select'
import { usePlace } from '@/context/LocationContext'

import logo from '../../assets/icons/logo.svg'
import Dogs from '../../assets/images/heroDogs.svg'
import search from '../../assets/icons/search.svg'

import {
  Container,
  FooterHero,
  Hero,
  Introduction,
  SelectInputs,
} from './styles'

export function Home() {
  const navigate = useNavigate()

  const { statesList, citiesList, setFormValues, formValues, isFetching } =
    usePlace()

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
    if (citiesList && citiesList.length > 0) {
      setFormValues((prevValues) => ({
        ...prevValues,
        city: citiesList[0].label,
      }))
    }
  }, [formValues.state, citiesList, setFormValues])

  function handleSearchPets() {
    const { state, city } = formValues
    navigate(`/map?state=${state}&city=${city}`)
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
              name="statesListHome"
              onChange={(stateValue: ChangeEvent<HTMLInputElement>) =>
                handleChangeState(stateValue.target.value)
              }
            />
            <Select
              options={citiesList}
              name="citiesListHome"
              disabled={!formValues.state || isFetching}
              value={formValues.city}
              onChange={(cityValue: ChangeEvent<HTMLInputElement>) =>
                handleChangeCity(cityValue.target.value)
              }
            />

            <button onClick={handleSearchPets}>
              <img src={search} alt="Botão para pesquisar pets" />
            </button>
          </SelectInputs>
        </FooterHero>
      </Hero>
    </Container>
  )
}
