import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import dog from '@/assets/images/dog.png'

import { useLocation } from 'react-router-dom'
import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'

export function Map() {
  const location = useLocation()
  const state = new URLSearchParams(location.search).get('state')
  const city = new URLSearchParams(location.search).get('city')

  console.log(state, city)
  function handleFilterByPetType() {
    // TO DO
  }

  return (
    <Container>
      <Aside />

      <Content>
        <Header>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
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
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
        </Display>
      </Content>
    </Container>
  )
}
