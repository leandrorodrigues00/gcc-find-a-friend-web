import { useParams } from 'react-router-dom'
import { Container } from './styles'

export function PetDetails() {
  const { id } = useParams()

  return (
    <Container>
      <h1>PetDetails</h1>
      <p>nome: tomate Brócolis</p>
      <p>id: {id}</p>
    </Container>
  )
}
