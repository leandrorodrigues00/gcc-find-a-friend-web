import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { usePlace } from '@/context/LocationContext'
import { Aside } from '~/Aside'
import { Card } from '~/CardPets'

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
import { useAuth } from '@/context/AuthContext'

export function Map() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    age: '',
    energy: '',
    size: '',
    independence: '',
    type: 'all',
  })

  const { isAuthenticated } = useAuth()

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
          {isAuthenticated ? (
            <p>
              Cadastrar um novo pet ?
              <span onClick={() => navigate(`/pet-create`)}>clique aqui</span>
            </p>
          ) : (
            <p>
              Cadastre-se ou faça{' '}
              <span onClick={() => navigate(`/login`)}>login aqui</span>
              para ajudar seu pet a encontrar um novo lar!
            </p>
          )}
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
