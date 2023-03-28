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
  CoordinatesMapProps,
  PetDetailsProps,
  PetGalleryProps,
} from '@/pages/PetDetails'
import { useState } from 'react'

type SizeToNumIcons = {
  small: number
  medium: number
  big: number
}

export function CardPetDetails({
  petInfos,
  adoptionRequirements,
  petGallery,
  orgCoordinates,
}: {
  petInfos: PetDetailsProps
  adoptionRequirements: AdoptionRequirementsProps[]
  petGallery: PetGalleryProps[]
  orgCoordinates: CoordinatesMapProps
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
          <img
            src="https://s3-alpha-sig.figma.com/img/9aee/3bf3/ebe2b9037571ee5a0ab10ffe737ff8c3?Expires=1680480000&Signature=Q3rZjCCtL3e60NSYsezZBrF1dn~~HeN50qCGj2nsLSLG98JIhXl6f5Rnd7kDVxlsVq4bUujKsQ4X5kfpdf1w2pbNhmhsRAvXmmz970zF6V4hIMJ5FZ~8H-~qpqlquW8RWuzNJ5nRwRV6P4I5pX3s-xjJqHvTj7QFcQO3K4YWSz0~Z7BLSqs1MKzTceKaCL0XgASoAwtuxASkGpo-CgWGqaHYp24FiZsCkC5ZRRbB-p1gC5mzBIKkBOScTEaeTNuqRmyK8E92A9VR5j7vLKDUofLhwkKJMB4tlTIGA2NFF3ZMJtX0OIHjrbRdJHcrSzdeWq8226heLlg0kFkDsdOrDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />

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

        <ContactButton>
          <img src={whatsappIconWhite} alt="" />

          <span>Entrar em contato</span>
        </ContactButton>
      </InnerContent>
    </Container>
  )
}
