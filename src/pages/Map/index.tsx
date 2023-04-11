import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { usePlace } from '@/context/LocationContext'
import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
  LoginButtonContainer,
} from './styles'

export function Map() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    age: '',
    energy: '',
    size: '',
    independence: '',
    type: 'all',
  })

  function handleNavigate() {
    navigate(`/login`)
  }

  function handleChangeFilterPet(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  const { filteredAnimalsCity } = usePlace()

  return (
    <Container>
      <Aside filters={filters} handleChangeFilterPet={handleChangeFilterPet} />

      <Content>
        <LoginButtonContainer>
          <p>
            Cadastre-se ou faça <span onClick={handleNavigate}>login aqui</span>
            para ajudar seu pet a encontrar um novo lar!
          </p>
        </LoginButtonContainer>

        <Header>
          <p>
            Encontre <span>{filteredAnimalsCity?.length} amigos</span> na sua
            cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              id="type"
              name="type"
              value={filters.type}
              onChange={handleChangeFilterPet}
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {filteredAnimalsCity &&
            filteredAnimalsCity?.length > 0 &&
            filteredAnimalsCity.map((animal) => (
              <Link key={animal.id} to={`/pet-details/${animal.id}`}>
                <Card
                  path={animal.photo_url}
                  type={animal.type}
                  name={animal.name}
                />
              </Link>
            ))}
        </Display>
      </Content>
    </Container>
  )
}
