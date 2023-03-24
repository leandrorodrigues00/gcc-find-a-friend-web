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
import { ChangeEvent, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocationContext } from '@/context/LocationContext'

export function Home() {
  const navigate = useNavigate()

  const { statesList, citiesList, setFormValues, formValues, isFetching } =
    useContext(LocationContext)

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
              name="states"
              onChange={(stateValue: ChangeEvent<HTMLInputElement>) =>
                handleChangeState(stateValue.target.value)
              }
            />
            <Select
              options={citiesList}
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
