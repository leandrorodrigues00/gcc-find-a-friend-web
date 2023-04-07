import { useForm } from 'react-hook-form'
import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from '../Aside'
import { ImageUploader } from '../ImageUploader'
import { Select } from '../Select'
import {
  AddElementButtonContainer,
  AdoptionRequirementsContainer,
  ButtonConfirm,
  Container,
  DescriptionLabel,
  FormPetInformation,
} from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function CardPetCreate() {
  const schemaPetCreate = z.object({
    name: z.string().min(5, 'insira um nome com pelo menos 5 caracteres'),
    description: z
      .string()
      .min(5, 'Faça uma breve descrição do pet com pelo menos 5 caracteres'),
    age: z.string(),
    size: z.string(),
    energy: z.string(),
    independence: z.string(),
  })

  type PetCreateForm = z.infer<typeof schemaPetCreate>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PetCreateForm>({
    resolver: zodResolver(schemaPetCreate),
  })

  function handleRegisterPet(data: PetCreateForm) {
    console.log(data)
  }
  return (
    <Container>
      <header>
        <h1>Adicione um pet</h1>
      </header>

      <FormPetInformation onSubmit={handleSubmit(handleRegisterPet)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
        />

        <DescriptionLabel htmlFor="description">
          Sobre <span>Máximo de 300 catacteres</span>
        </DescriptionLabel>
        <textarea
          id="description"
          placeholder=""
          maxLength={300}
          {...register('description', { required: true })}
        />

        <label htmlFor="age">Idade</label>
        <Select
          options={ageOptions}
          register={register('age', { required: true })}
        />

        <label htmlFor="size">Porte</label>
        <Select
          options={sizeOptions}
          register={register('size', { required: true })}
        />

        <label htmlFor="energy">Nível de energia</label>
        <Select
          options={energyOptions}
          register={register('energy', { required: true })}
        />

        <label htmlFor="independence">Nível de independência</label>
        <Select
          options={independencyOptions}
          register={register('independence', { required: true })}
        />

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

          <ButtonConfirm type="submit" onClick={() => {}}>
            Confirmar
          </ButtonConfirm>
        </AdoptionRequirementsContainer>
      </FormPetInformation>
    </Container>
  )
}
