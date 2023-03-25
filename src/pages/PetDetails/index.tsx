import { useNavigate, useParams } from 'react-router-dom'
import { Container, InnerContainer } from './styles'

import logoMap from '../../assets/icons/logoMap.svg'

import chevronLeft from '../../assets/icons/chevron-left.svg'
import { CardPetDetails } from '@/components/CardPetDetails'

export function PetDetails() {
  const navigate = useNavigate()
  const { id } = useParams()

  function handleNavigatePreviousPage() {
    navigate('/map')
  }

  return (
    <Container>
      <aside>
        <img src={logoMap} alt="" />

        <button onClick={handleNavigatePreviousPage}>
          <img src={chevronLeft} alt="Back to previous page" />
        </button>
      </aside>

      <InnerContainer>
        <p>Seu novo amigo</p>

        <CardPetDetails />
      </InnerContainer>
    </Container>
  )
}
