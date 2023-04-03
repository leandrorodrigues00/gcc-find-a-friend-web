/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, InnerContainer } from './styles'

import { CardPetDetails } from '@/components/CardPetDetails'
import { LocationContext } from '@/context/LocationContext'

import logoMap from '../../assets/icons/logo-mapPage.svg'
import chevronLeft from '../../assets/icons/chevron-left.svg'
import { API_BASE_URL } from '@/config'

export interface PetDetailsProps {
  id: string
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

interface PetDetailsApiResponse {
  pet: PetDetailsProps
}

export interface CoordinatesMapProps {
  latitude: string
  longitude: string
}

interface CoordinatesMapApiResponse {
  coordinates: CoordinatesMapProps
}

export interface AdoptionRequirementsProps {
  title: string
  id: string
  petId: string
}

interface AdoptionRequirementsApiResponse {
  adoption_requirements: AdoptionRequirementsProps[]
}

export interface PetGalleryProps {
  id: string
  image: string
  petId: string
  photo_url: string
}

interface PetGalleryApiResponse {
  pet_gallery: PetGalleryProps[]
}

export function PetDetails() {
  const [petInfos, setPetInfos] = useState<PetDetailsProps | null>(null)
  const [petGallery, setPetGallery] = useState<PetGalleryProps[] | null>(null)
  const [adoptionRequirements, setAdoptionRequirements] = useState<
    AdoptionRequirementsProps[]
  >([])

  const navigate = useNavigate()
  const { id } = useParams()
  const { setOrgCoordinates, fetchData } = useContext(LocationContext)

  useEffect(() => {
    async function handlePetData() {
      const data = await fetchData<PetDetailsApiResponse>(
        `${API_BASE_URL}/pets/show/${id}`,
      )
      if (!data) return
      setPetInfos(data.pet)

      fetchCoordinatesMap(data.pet.org.cep)
    }

    async function fetchCoordinatesMap(cep: string) {
      const data = await fetchData<CoordinatesMapApiResponse>(
        `${API_BASE_URL}/location/coordinates/${cep}`,
      )
      if (!data) return

      setOrgCoordinates(data.coordinates)
    }

    async function fetchAdoptionRequirements() {
      const data = await fetchData<AdoptionRequirementsApiResponse>(
        `${API_BASE_URL}/pets/adoption-requirements/${id}`,
      )
      if (!data) return

      setAdoptionRequirements(data.adoption_requirements)
    }

    async function fetchPetGallery() {
      const data = await fetchData<PetGalleryApiResponse>(
        `${API_BASE_URL}/pets/gallery/${id}`,
      )
      if (!data) return

      setPetGallery(data.pet_gallery)
    }

    handlePetData()
    fetchAdoptionRequirements()
    fetchPetGallery()
  }, [id])

  function handleNavigateBackToMap() {
    navigate('/map')
  }

  return (
    <Container>
      <aside>
        <img src={logoMap} alt="" />

        <button onClick={handleNavigateBackToMap}>
          <img src={chevronLeft} alt="Back to previous page" />
        </button>
      </aside>

      <InnerContainer>
        <p>Seu novo amigo</p>

        {petInfos && petGallery && (
          <CardPetDetails
            petInfos={petInfos}
            adoptionRequirements={adoptionRequirements}
            petGallery={petGallery}
          />
        )}
      </InnerContainer>
    </Container>
  )
}
