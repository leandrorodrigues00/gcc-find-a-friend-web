/* eslint-disable camelcase */
import { useNavigate, useParams } from 'react-router-dom'
import { Container, InnerContainer } from './styles'

import logoMap from '../../assets/icons/logo-mapPage.svg'

import chevronLeft from '../../assets/icons/chevron-left.svg'
import { CardPetDetails } from '@/components/CardPetDetails'
import { useEffect, useState } from 'react'

const API_BASE_URL = 'http://localhost:3333'

export interface PetDetailsProps {
  id: number
  name: string
  description: string
  city: string
  age: string
  energy: number
  size: string
  independence: string
  type: string
  photo: string
  orgId: string
  org: {
    id: string
    nome: string
    address: string
    cep: string
    whatsappNumber: string
  }
  photo_url: string
}

export interface AdoptionRequirementsProps {
  title: string
  id: string
}

export function PetDetails() {
  const [petInfos, setPetInfos] = useState<PetDetailsProps | null>(null)
  const [adoptionRequirements, setAdoptionRequirements] = useState<
    AdoptionRequirementsProps[]
  >([])

  const navigate = useNavigate()
  const { id } = useParams()

  async function handleGetPetData() {
    const data = await fetch(`${API_BASE_URL}/pets/show/${id}`)
    const { pet }: { pet: PetDetailsProps } = await data.json()
    setPetInfos(pet)
  }

  async function handleGetAdoptionRequirements() {
    const data = await fetch(`${API_BASE_URL}/pets/adoption-requirements/${id}`)
    const {
      adoption_requirements,
    }: { adoption_requirements: Array<AdoptionRequirementsProps> } =
      await data.json()

    setAdoptionRequirements(adoption_requirements)
  }

  useEffect(() => {
    handleGetPetData()
    handleGetAdoptionRequirements()
  }, [])

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

        {petInfos && (
          <CardPetDetails
            petInfos={petInfos}
            adoptionRequirements={adoptionRequirements}
          />
        )}
      </InnerContainer>
    </Container>
  )
}
