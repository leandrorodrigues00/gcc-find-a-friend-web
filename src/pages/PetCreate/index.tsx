import { CardPetCreate } from '@/components/CardPetCreate'

import {
  logoDetails,
  logoMapPage,
  chevronLeft,
  logoutIcon,
} from '../../assets/icons/index'
import { Container, DetailsContainer, InnerContainer } from './styles'

export function PetCreate() {
  return (
    <Container>
      <aside>
        <img src={logoMapPage} alt="" />

        <button>
          <img src={chevronLeft} alt="Back to previous page" />
        </button>
      </aside>

      <InnerContainer>
        <header>
          <DetailsContainer>
            <img src={logoDetails} alt="" />
            <div>
              <p>Seu Cãopanheiro</p>
              <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>
            </div>
          </DetailsContainer>

          <button>
            <img src={logoutIcon} alt="" />
          </button>
        </header>

        <CardPetCreate />
      </InnerContainer>
    </Container>
  )
}
