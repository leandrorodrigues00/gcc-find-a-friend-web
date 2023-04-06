import {
  AddElementButtonContainer,
  AdoptionRequirementsContainer,
  ButtonConfirm,
  Container,
  DescriptionLabel,
  FormPetInformation,
  ImagesContainer,
  SelectedImagensContainer,
} from './styles'

import { uploadIcon, fileIcon, xSquare } from '../../assets/icons/index'

export function CardPetCreate() {
  // const [fileNames, setFileNames] = useState([])

  // const handleFileInputChange = (event) => {
  //   const newFiles = event.target.files
  //   if (newFiles.length > 0) {
  //     const newFileNames = [...fileNames]
  //     for (
  //       let i = 0;
  //       i < Math.min(newFiles.length, 6 - newFileNames.length);
  //       i++
  //     ) {
  //       newFileNames.push(newFiles[i].name)
  //     }
  //     setFileNames(newFileNames)
  //   }
  // }

  // const handleDrop = (event) => {
  //   event.preventDefault()
  //   const newFiles = event.dataTransfer.files
  //   if (newFiles.length > 0) {
  //     const newFileNames = [...fileNames]
  //     for (
  //       let i = 0;
  //       i < Math.min(newFiles.length, 6 - newFileNames.length);
  //       i++
  //     ) {
  //       newFileNames.push(newFiles[i].name)
  //     }
  //     setFileNames(newFileNames)
  //   }
  // }
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

        <label htmlFor="images">Fotos</label>
        <ImagesContainer>
          <input
            type="file"
            id="images"
            placeholder=""
            multiple
            accept="image/*"
            max="6"
          />

          <label
            htmlFor="images"
            onDragOver={(event) => event.preventDefault()}
          >
            <img src={uploadIcon} alt="" />
            Arraste e solte o arquivo
          </label>
        </ImagesContainer>

        <SelectedImagensContainer>
          <div>
            <img src={fileIcon} alt="" />
            <span>{'fileName'}</span>
          </div>

          <img src={xSquare} alt="" />
        </SelectedImagensContainer>

        <AddElementButtonContainer>+</AddElementButtonContainer>

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
