import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import dog from '@/assets/images/dog.png'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'
import { useContext } from 'react'
import { LocationContext } from '@/context/LocationContext'
import { Link } from 'react-router-dom'

export function Map() {
  const { filteredAnimalsCity } = useContext(LocationContext)
  console.log(filteredAnimalsCity)
  function handleFilterByPetType() {
    // TO DO
  }

  return (
    <Container>
      <Aside />

      <Content>
        <Header>
          <p>
            Encontre{' '}
            <span>
              {filteredAnimalsCity && filteredAnimalsCity?.length > 0 ? (
                filteredAnimalsCity?.length
              ) : (
                <span>324</span>
              )}{' '}
              amigos
            </span>{' '}
            na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect name="size" id="size">
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {filteredAnimalsCity && filteredAnimalsCity?.length > 0 ? (
            filteredAnimalsCity.map((animal) => (
              <Link key={animal.id} to={`/pet-details/${animal.id}`}>
                <Card
                  path={animal.photo_url}
                  type={animal.type}
                  name={animal.name}
                />
              </Link>
            ))
          ) : (
            <>
              <Card path={dog} type="dog" name="Alfredo" />
              <Card path={dog} type="cat" name="Tobia" />
              <Card path={dog} type="dog" name="Alfredo" />
              <Card path={dog} type="cat" name="Tobia" />
              <Card path={dog} type="dog" name="Alfredo" />
              <Card path={dog} type="cat" name="Tobia" />
              <Card path={dog} type="dog" name="Alfredo" />
              <Card path={dog} type="cat" name="Tobia" />
            </>
          )}
        </Display>
      </Content>
    </Container>
  )
}
