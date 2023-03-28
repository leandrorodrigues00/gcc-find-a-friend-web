import {
  AddressContainer,
  AdoptionRequirementsContainer,
  ContactButton,
  Container,
  EnergyFeatureImage,
  InnerContent,
  MapContainer,
  PetFeatures,
  SizeFeatureImage,
  WhatsAppIcon,
} from './styles'

import {
  fullEnergy,
  noEnergy,
  maximize,
  fullEclipse,
  emptyEclipse,
  logoDetails,
  whatsappIcon,
  whatsappIconWhite,
  alerta,
} from '../../assets/icons/index'

import {
  AdoptionRequirementsProps,
  PetDetailsProps,
  PetGalleryProps,
} from '@/pages/PetDetails'
import { useState } from 'react'
import { MapOrg } from '../MapOrg'

type SizeToNumIcons = {
  small: number
  medium: number
  big: number
}

export function CardPetDetails({
  petInfos,
  adoptionRequirements,
  petGallery,
}: {
  petInfos: PetDetailsProps
  adoptionRequirements: AdoptionRequirementsProps[]
  petGallery: PetGalleryProps[]
}) {
  const [selectedImage, setSelectedImage] = useState(petInfos.photo_url)

  function handleImageClick(photoUrl: string) {
    setSelectedImage(photoUrl)
  }
  const renderEnergyIcons = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <img key={i} src={i < petInfos.energy ? fullEnergy : noEnergy} alt="" />
    ))
  }

  const renderEnergyText = () => {
    if (petInfos.energy <= 2) {
      return <p>Pouca Energia</p>
    } else if (petInfos.energy >= 3) {
      return <p>muita energia</p>
    } else {
      return null
    }
  }

  const sizeToNumIcons: SizeToNumIcons = {
    small: 1,
    medium: 2,
    big: 3,
  }

  const renderSizeIcons = () => {
    const numIcons = sizeToNumIcons[petInfos.size as keyof SizeToNumIcons]
    const icons = []
    for (let i = 0; i < 3; i++) {
      if (i < numIcons) {
        icons.push(<img key={i} src={fullEclipse} alt="" />)
      } else {
        icons.push(<img key={i} src={emptyEclipse} alt="" />)
      }
    }
    return icons
  }

  const renderSizeText = () => {
    if (petInfos.size === 'small') {
      return <p>Pequenino</p>
    } else if (petInfos.size === 'medium') {
      return <p>Médio</p>
    } else if (petInfos.size === 'big') {
      return <p>Grande</p>
    } else {
      return null
    }
  }

  return (
    <Container>
      <header>
        <img src={selectedImage} alt={`Foto do pet: ${petInfos.name}`} />
      </header>
      <div>
        <ul>
          {petGallery.map((photo) => (
            <li
              key={photo.id}
              onClick={() => handleImageClick(photo.photo_url)}
            >
              <img src={photo.photo_url} alt={photo.image} />
            </li>
          ))}
        </ul>
      </div>

      <InnerContent>
        <header>
          <h1>{petInfos.name}</h1>
          <p>{petInfos.description}</p>
        </header>

        <PetFeatures>
          <div>
            <EnergyFeatureImage>{renderEnergyIcons()}</EnergyFeatureImage>
            {renderEnergyText()}
          </div>

          <div>
            <div>
              <img src={maximize} alt="" />
            </div>
            <p>Ambiente amplo</p>
          </div>

          <div>
            <SizeFeatureImage>{renderSizeIcons()}</SizeFeatureImage>
            {renderSizeText()}
          </div>
        </PetFeatures>

        <MapContainer>
          <div id="map">
            <MapOrg />
          </div>

          <p>Ver rotas no Google Maps</p>
        </MapContainer>

        <AddressContainer>
          <div>
            <img src={logoDetails} alt="" />
            <div>
              <p>{petInfos.org.nome}</p>
              <p>
                {petInfos.org.address} - {petInfos.city}{' '}
              </p>

              <WhatsAppIcon>
                <img src={whatsappIcon} alt="" />
                <p>{petInfos.org.whatsappNumber}</p>
              </WhatsAppIcon>
            </div>
          </div>
        </AddressContainer>

        <AdoptionRequirementsContainer>
          <p>Requisitos para adoção</p>

          <ul>
            {adoptionRequirements.map((requirement) => (
              <li key={requirement.id}>
                <img src={alerta} alt="" />
                <p>{requirement.title}</p>
              </li>
            ))}
          </ul>
        </AdoptionRequirementsContainer>

        <ContactButton href={`https://wa.me/${petInfos.org.whatsappNumber}`}>
          <img src={whatsappIconWhite} alt="" />
          Entrar em contato
        </ContactButton>
      </InnerContent>
    </Container>
  )
}
