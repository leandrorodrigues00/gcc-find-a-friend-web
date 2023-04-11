import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/context/AuthContext'
import { CardPetCreate } from '@/pages/PetCreate/components/CardPetCreate'

import {
  logoDetails,
  logoMapPage,
  chevronLeft,
  logoutIcon,
} from '../../assets/icons/index'
import { Container, DetailsContainer, InnerContainer } from './styles'
import { LoginResponse } from '../Login'

function getOrgData() {
  const orgString = localStorage.getItem('@findAFriend:orgAddress')
  if (orgString) {
    const {
      org: { nome, address, cep },
    }: LoginResponse = JSON.parse(orgString)
    return { nome, address, cep }
  } else {
    return { nome: 'Seu Cãopanheiro', address: '*********', cep: '**********' }
  }
}

export function PetCreate() {
  const { setToken } = useAuth()
  const navigate = useNavigate()

  const { nome, address, cep } = getOrgData()

  function handleLogout() {
    setToken(null)
  }

  function NavigateBackToMap() {
    navigate('/map')
  }
  return (
    <Container>
      <aside>
        <img src={logoMapPage} alt="" />

        <button>
          <img
            src={chevronLeft}
            onClick={NavigateBackToMap}
            alt="Back to previous page"
          />
        </button>
      </aside>

      <InnerContainer>
        <header>
          <DetailsContainer>
            <img src={logoDetails} alt="" />
            <div>
              <p>{nome}</p>
              <p>
                {address} - {cep}
              </p>
            </div>
          </DetailsContainer>

          <button onClick={handleLogout}>
            <img src={logoutIcon} alt="botão para realizar logout" />
          </button>
        </header>

        <CardPetCreate />
      </InnerContainer>
    </Container>
  )
}
