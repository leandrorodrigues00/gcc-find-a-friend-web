/* eslint-disable camelcase */
import { useState } from 'react'

import {
  AdoptionRequirementsProps,
  PetDetailsProps,
  PetGalleryProps,
} from '@/pages/PetDetails'
import { MapOrg } from '../MapOrg'

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
  const { name, description, photo_url, energy, size, org, city } = petInfos
  const [selectedImage, setSelectedImage] = useState(photo_url)

  function handleImageClick(photoUrl: string) {
    setSelectedImage(photoUrl)
  }

  const renderEnergyIcons = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <img key={i} src={i < energy ? fullEnergy : noEnergy} alt="" />
    ))
  }

  const renderEnergyText = () => {
    if (energy <= 2) {
      return <p>Pouca Energia</p>
    } else if (energy >= 3) {
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
    const numIcons = sizeToNumIcons[size as keyof SizeToNumIcons]
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
    if (size === 'small') {
      return <p>Pequenino</p>
    } else if (size === 'medium') {
      return <p>Médio</p>
    } else if (size === 'big') {
      return <p>Grande</p>
    } else {
      return null
    }
  }

  return (
    <Container>
      <header>
        <img src={selectedImage} alt={`Foto do pet: ${name}`} />
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
          <h1>{name}</h1>
          <p>{description}</p>
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
              <p>{org.nome}</p>
              <p>
                {org.address} - {city}{' '}
              </p>

              <WhatsAppIcon>
                <img src={whatsappIcon} alt="" />
                <p>{org.whatsappNumber}</p>
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

        <ContactButton
          href={`https://wa.me/${org.whatsappNumber}`}
          target="_blank"
        >
          <img src={whatsappIconWhite} alt="" />
          Entrar em contato
        </ContactButton>
      </InnerContent>
    </Container>
  )
}
