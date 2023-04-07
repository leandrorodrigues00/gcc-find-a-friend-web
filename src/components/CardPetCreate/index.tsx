import { useForm, useFieldArray } from 'react-hook-form'
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
  ErrorMessage,
  FormPetInformation,
  InputWrapper,
} from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function CardPetCreate() {
  const schemaPetCreate = z.object({
    name: z.string().min(2, 'insira um nome com pelo menos 2 caracteres'),
    description: z
      .string()
      .min(5, 'Faça uma breve descrição do pet com pelo menos 5 caracteres'),
    age: z.string().nonempty('Selecione uma idade'),
    size: z.string().nonempty('Selecione o porte'),
    energy: z.string().nonempty('Selecione o nivel de Energia'),
    independence: z.string().nonempty('Selecione o nivel de independência'),
    adoptionRequirements: z
      .array(
        z.object({
          requirements: z
            .string()
            .min(5, 'insira um requisito com pelo menos 5 caracteres'),
        }),
      )
      .min(1, 'É preciso informar no minimo 1 requisito'),
  })

  type PetCreateForm = z.infer<typeof schemaPetCreate>

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PetCreateForm>({
    resolver: zodResolver(schemaPetCreate),
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'adoptionRequirements',
  })

  function addNewRequirements() {
    append({ requirements: '' })
  }

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
        <InputWrapper>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputWrapper>

        <DescriptionLabel htmlFor="description">
          Sobre <span>Máximo de 300 catacteres</span>
        </DescriptionLabel>

        <InputWrapper>
          <textarea
            id="description"
            placeholder=""
            maxLength={300}
            {...register('description', { required: true })}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </InputWrapper>

        <label htmlFor="age">Idade</label>

        <InputWrapper>
          <Select
            options={ageOptions}
            register={register('age', { required: true })}
          />
          <ErrorMessage>{errors.age?.message}</ErrorMessage>
        </InputWrapper>

        <label htmlFor="size">Porte</label>

        <InputWrapper>
          <Select
            options={sizeOptions}
            register={register('size', { required: true })}
          />
          <ErrorMessage>{errors.size?.message}</ErrorMessage>
        </InputWrapper>

        <label htmlFor="energy">Nível de energia</label>

        <InputWrapper>
          <Select
            options={energyOptions}
            register={register('energy', { required: true })}
          />
          <ErrorMessage>{errors.energy?.message}</ErrorMessage>
        </InputWrapper>

        <label htmlFor="independence">Nível de independência</label>

        <InputWrapper>
          <Select
            options={independencyOptions}
            register={register('independence', { required: true })}
          />
          <ErrorMessage>{errors.independence?.message}</ErrorMessage>
        </InputWrapper>

        <label htmlFor="ambient">Ambiente</label>
        <InputWrapper>
          <input type="text" id="ambient" placeholder="" />
        </InputWrapper>
        <ImageUploader />

        <AdoptionRequirementsContainer>
          <h2>Requesitos para adoção</h2>

          <label htmlFor="adoptionRequirements">Requisito</label>
          <input
            type="text"
            id="adoptionRequirements"
            placeholder="Defina um requisito"
            {...register(`adoptionRequirements.${0}.requirements`)}
          />
          <ErrorMessage>
            {errors.adoptionRequirements?.[0]?.requirements?.message}
          </ErrorMessage>

          {fields.map((field, index) => {
            if (index === 0) {
              return null
            }
            return (
              <div key={field.id}>
                <input
                  type="text"
                  id="adoptionRequirements"
                  placeholder="Defina um requisito"
                  {...register(`adoptionRequirements.${index}.requirements`)}
                />

                <ErrorMessage>
                  {errors.adoptionRequirements?.[index]?.requirements?.message}
                </ErrorMessage>
              </div>
            )
          })}

          <AddElementButtonContainer type="button" onClick={addNewRequirements}>
            +
          </AddElementButtonContainer>

          <ErrorMessage>{errors.adoptionRequirements?.message}</ErrorMessage>

          <ButtonConfirm type="submit" onClick={() => {}}>
            Confirmar
          </ButtonConfirm>
        </AdoptionRequirementsContainer>
      </FormPetInformation>
    </Container>
  )
}
