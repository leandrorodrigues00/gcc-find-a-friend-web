import { ImageUploader } from '../ImageUploader'
import {
  AddElementButtonContainer,
  AdoptionRequirementsContainer,
  ButtonConfirm,
  Container,
  DescriptionLabel,
  FormPetInformation,
} from './styles'

export function CardPetCreate() {
  return (
    <Container>
      <header>
        <h1>Adicione um pet</h1>
      </header>

      <FormPetInformation>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="" />

        <DescriptionLabel htmlFor="description">
          Sobre <span>Máximo de 300 catacteres</span>
        </DescriptionLabel>
        <textarea id="description" placeholder="" maxLength={300} />

        <label htmlFor="age">Idade</label>
        <input type="text" id="age" placeholder="" />

        <label htmlFor="size">Porte</label>
        <input type="text" id="size" placeholder="" />

        <label htmlFor="energy">Nível de energia</label>
        <input type="text" id="energy" placeholder="" />

        <label htmlFor="independence">Nível de independência</label>
        <input type="text" id="independence" placeholder="" />

        <label htmlFor="ambient">Ambiente</label>
        <input type="text" id="ambient" placeholder="" />

        <ImageUploader />

        <AdoptionRequirementsContainer>
          <h2>Requesitos para adoção</h2>

          <label htmlFor="adoptionRequirements">Requisito</label>
          <input
            type="text"
            id="adoptionRequirements"
            placeholder="Defina um requisito"
          />
          <AddElementButtonContainer>+</AddElementButtonContainer>

          <ButtonConfirm>Confirmar</ButtonConfirm>
        </AdoptionRequirementsContainer>
      </FormPetInformation>
    </Container>
  )
}
