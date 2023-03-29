/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, InnerContainer } from './styles'

import { CardPetDetails } from '@/components/CardPetDetails'
import { LocationContext } from '@/context/LocationContext'

import logoMap from '../../assets/icons/logo-mapPage.svg'
import chevronLeft from '../../assets/icons/chevron-left.svg'

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

export interface PetGalleryProps {
  id: string
  image: string
  photo_url: string
}

export function PetDetails() {
  const [petInfos, setPetInfos] = useState<PetDetailsProps | null>(null)
  const [petGallery, setPetGallery] = useState<PetGalleryProps[] | null>(null)
  const [adoptionRequirements, setAdoptionRequirements] = useState<
    AdoptionRequirementsProps[]
  >([])

  const navigate = useNavigate()
  const { id } = useParams()
  const { setOrgCoordinates } = useContext(LocationContext)

  useEffect(() => {
    async function handleGetPetData() {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/pets/show/${id}`,
        )

        if (!data.ok) {
          throw new Error(
            `Failed to fetch pet data. Status code: ${data.status}`,
          )
        }

        const { pet }: { pet: PetDetailsProps } = await data.json()

        const orgCep = pet.org?.cep

        if (orgCep) {
          const coordinatesData = await fetch(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/location/coordinates/${orgCep}`,
          )

          if (!coordinatesData.ok) {
            throw new Error(
              `Failed to fetch organization coordinates. Status code: ${coordinatesData.status}`,
            )
          }

          const { coordinates } = await coordinatesData.json()
          setOrgCoordinates(coordinates)
        }

        setPetInfos(pet)
      } catch (error) {
        console.error(error)
      }
    }

    async function handleGetAdoptionRequirements() {
      try {
        const data = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/pets/adoption-requirements/${id}`,
        )

        if (!data.ok) {
          throw new Error('Failed to fetch adoption requirements')
        }

        const {
          adoption_requirements,
        }: { adoption_requirements: Array<AdoptionRequirementsProps> } =
          await data.json()
        setAdoptionRequirements(adoption_requirements)
      } catch (error) {
        console.error(error)
      }
    }

    async function handleGetPetGallery() {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/pets/gallery/${id}`,
        )

        if (!data.ok) {
          throw new Error('Failed to fetch pet gallery data')
        }

        const { pet_gallery }: { pet_gallery: Array<PetGalleryProps> } =
          await data.json()
        setPetGallery(pet_gallery)
      } catch (error) {
        console.error(error)
        setPetGallery([])
      }
    }

    handleGetPetData()
    handleGetAdoptionRequirements()
    handleGetPetGallery()
  }, [id, setOrgCoordinates])

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
