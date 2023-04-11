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

export function PetCreate() {
  const { setToken } = useAuth()
  const navigate = useNavigate()

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
              <p>Seu Cãopanheiro</p>
              {/* <p>Rua do meio, 123 , Boa viagem, Recife - PE </p> */}
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
