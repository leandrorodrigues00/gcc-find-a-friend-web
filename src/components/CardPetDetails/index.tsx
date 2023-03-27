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
import { PetDetailsProps } from '@/pages/PetDetails'

export function CardPetDetails({ petInfos }: { petInfos: PetDetailsProps }) {
  console.log(petInfos.age)
  return (
    <Container>
      <header>
        <img
          src="https://s3-alpha-sig.figma.com/img/bbef/f7f9/328b9f2cca850bdf6f5be689b99c9a40?Expires=1680480000&Signature=OVZ5ZESgPLH4vXTEgBKNMwIb4ZcDska26Htm-Z-7WMnQwhSxd7ttbEVEGpnbZJ7yTzzByNoAQ1qDCiFGRdfrYM2iChIr5r3MRfFWdjQd8k3LOi58UYrE7lwpC49DCUCQNGAyIXjAQ5ZhgdLdw3AOdCHUrXDhQV3L7EMigc72VEvGqjEJn5ILpqcijMuPS4-ZGK6TerTODInH0CLGH2zdepKN5oCX67~V~hOCNBoNSFcFYqpa0HSs4qVCTn3DXzhDr5lbYRx9C0DZzjgLUNze-VCzpWXpKtakz0R1VJ8m9BnK0QxlqtYZ7owtb3dLzgB8c6H4TCNHdJtvAa5lVMLL1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </header>
      <div>
        <ul>
          <li>
            <img
              src="https://s3-alpha-sig.figma.com/img/3606/22f8/63943566bc4093442ee7132c1e2dbb5d?Expires=1681084800&Signature=H7NbCh4ieValSvC36CsG9eNnc2iu54Gl20CAGeDwzpemy1CqqhA~stEFmpKxeAOilg7A-wYjYJr3C6B4PmmncPC~Lmyb6ytVM-WrK2trUCjf5PuwR5zb9sp7xMG-a4HZ~oBl-CQ5jL3K259rWKD9c4r4muQk5lpKJS7TD1axkEX1irtqGnBJ8J2yIqBZ3-SN~ON8NpHE5kfLKreh7~u1AcA5mhXQ1Jkd4zbpHVNZNiseuIu8RByWdqw47P5BOS5VJX3Hv8ZELH-NhPcQayrLsxs~yMjumSvFXUfH9P2xPQAVeWcy~sZ8N0hmpIatTW~ywhivllO55jelnXeHhldisw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://s3-alpha-sig.figma.com/img/3606/22f8/63943566bc4093442ee7132c1e2dbb5d?Expires=1681084800&Signature=H7NbCh4ieValSvC36CsG9eNnc2iu54Gl20CAGeDwzpemy1CqqhA~stEFmpKxeAOilg7A-wYjYJr3C6B4PmmncPC~Lmyb6ytVM-WrK2trUCjf5PuwR5zb9sp7xMG-a4HZ~oBl-CQ5jL3K259rWKD9c4r4muQk5lpKJS7TD1axkEX1irtqGnBJ8J2yIqBZ3-SN~ON8NpHE5kfLKreh7~u1AcA5mhXQ1Jkd4zbpHVNZNiseuIu8RByWdqw47P5BOS5VJX3Hv8ZELH-NhPcQayrLsxs~yMjumSvFXUfH9P2xPQAVeWcy~sZ8N0hmpIatTW~ywhivllO55jelnXeHhldisw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://s3-alpha-sig.figma.com/img/3606/22f8/63943566bc4093442ee7132c1e2dbb5d?Expires=1681084800&Signature=H7NbCh4ieValSvC36CsG9eNnc2iu54Gl20CAGeDwzpemy1CqqhA~stEFmpKxeAOilg7A-wYjYJr3C6B4PmmncPC~Lmyb6ytVM-WrK2trUCjf5PuwR5zb9sp7xMG-a4HZ~oBl-CQ5jL3K259rWKD9c4r4muQk5lpKJS7TD1axkEX1irtqGnBJ8J2yIqBZ3-SN~ON8NpHE5kfLKreh7~u1AcA5mhXQ1Jkd4zbpHVNZNiseuIu8RByWdqw47P5BOS5VJX3Hv8ZELH-NhPcQayrLsxs~yMjumSvFXUfH9P2xPQAVeWcy~sZ8N0hmpIatTW~ywhivllO55jelnXeHhldisw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://s3-alpha-sig.figma.com/img/3606/22f8/63943566bc4093442ee7132c1e2dbb5d?Expires=1681084800&Signature=H7NbCh4ieValSvC36CsG9eNnc2iu54Gl20CAGeDwzpemy1CqqhA~stEFmpKxeAOilg7A-wYjYJr3C6B4PmmncPC~Lmyb6ytVM-WrK2trUCjf5PuwR5zb9sp7xMG-a4HZ~oBl-CQ5jL3K259rWKD9c4r4muQk5lpKJS7TD1axkEX1irtqGnBJ8J2yIqBZ3-SN~ON8NpHE5kfLKreh7~u1AcA5mhXQ1Jkd4zbpHVNZNiseuIu8RByWdqw47P5BOS5VJX3Hv8ZELH-NhPcQayrLsxs~yMjumSvFXUfH9P2xPQAVeWcy~sZ8N0hmpIatTW~ywhivllO55jelnXeHhldisw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://s3-alpha-sig.figma.com/img/3606/22f8/63943566bc4093442ee7132c1e2dbb5d?Expires=1681084800&Signature=H7NbCh4ieValSvC36CsG9eNnc2iu54Gl20CAGeDwzpemy1CqqhA~stEFmpKxeAOilg7A-wYjYJr3C6B4PmmncPC~Lmyb6ytVM-WrK2trUCjf5PuwR5zb9sp7xMG-a4HZ~oBl-CQ5jL3K259rWKD9c4r4muQk5lpKJS7TD1axkEX1irtqGnBJ8J2yIqBZ3-SN~ON8NpHE5kfLKreh7~u1AcA5mhXQ1Jkd4zbpHVNZNiseuIu8RByWdqw47P5BOS5VJX3Hv8ZELH-NhPcQayrLsxs~yMjumSvFXUfH9P2xPQAVeWcy~sZ8N0hmpIatTW~ywhivllO55jelnXeHhldisw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://s3-alpha-sig.figma.com/img/3606/22f8/63943566bc4093442ee7132c1e2dbb5d?Expires=1681084800&Signature=H7NbCh4ieValSvC36CsG9eNnc2iu54Gl20CAGeDwzpemy1CqqhA~stEFmpKxeAOilg7A-wYjYJr3C6B4PmmncPC~Lmyb6ytVM-WrK2trUCjf5PuwR5zb9sp7xMG-a4HZ~oBl-CQ5jL3K259rWKD9c4r4muQk5lpKJS7TD1axkEX1irtqGnBJ8J2yIqBZ3-SN~ON8NpHE5kfLKreh7~u1AcA5mhXQ1Jkd4zbpHVNZNiseuIu8RByWdqw47P5BOS5VJX3Hv8ZELH-NhPcQayrLsxs~yMjumSvFXUfH9P2xPQAVeWcy~sZ8N0hmpIatTW~ywhivllO55jelnXeHhldisw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </li>
        </ul>
      </div>

      <InnerContent>
        <header>
          <h1>Alfredo</h1>
          <p>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </p>
        </header>

        <PetFeatures>
          <div>
            <EnergyFeatureImage>
              <img src={fullEnergy} alt="" />
              <img src={fullEnergy} alt="" />
              <img src={fullEnergy} alt="" />
              <img src={fullEnergy} alt="" />
              <img src={noEnergy} alt="" />
            </EnergyFeatureImage>
            <p>muita energia</p>
          </div>

          <div>
            <div>
              <img src={maximize} alt="" />
            </div>
            <p>Ambiente amplo</p>
          </div>

          <div>
            <SizeFeatureImage>
              <img src={fullEclipse} alt="" />
              <img src={emptyEclipse} alt="" />
              <img src={emptyEclipse} alt="" />
            </SizeFeatureImage>
            <p>Pequenino</p>
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
              <p>Seu Cãopanheiro</p>
              <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>

              <WhatsAppIcon>
                <img src={whatsappIcon} alt="" />
                <p>81 1234.4567</p>
              </WhatsAppIcon>
            </div>
          </div>
        </AddressContainer>

        <AdoptionRequirementsContainer>
          <p>Requisitos para adoção</p>

          <ul>
            <li>
              <img src={alerta} alt="" />
              <p> Local grande para o animal correr e brincar.</p>
            </li>
            <li>
              <img src={alerta} alt="" />
              <p>Proibido apartamento</p>
            </li>
            <li>
              <img src={alerta} alt="" />
              <p>Ambiente frio, pois possui muito pelo.</p>
            </li>
            <li>
              <img src={alerta} alt="" />
              <p>Cão com intolerância a lactose.</p>
            </li>
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
