import { useForm, useFieldArray, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from '../../../../components/Aside'

import { Select } from '../../../../components/Select'
import { API_BASE_URL } from '@/config'
import { useAuth } from '@/context/AuthContext'
import { Toastify } from '../../../../components/Toastify'
import { ImageUploader } from '../ImageUploader'

import { xSquare } from '../../../../assets/icons/index'
import {
  AddElementButtonContainer,
  AdoptionRequirementsContainer,
  ButtonConfirm,
  Container,
  DescriptionLabel,
  ErrorMessage,
  FormPetInformation,
  InputRequirements,
  InputWrapper,
} from './styles'

const schemaPetCreate = z.object({
  name: z.string().min(2, 'insira um nome com pelo menos 2 caracteres'),
  type: z.string().nonempty('Selecione uma espécie'),
  description: z
    .string()
    .min(5, 'Faça uma breve descrição do pet com pelo menos 5 caracteres'),
  age: z.string().nonempty('Selecione uma idade'),
  size: z.string().nonempty('Selecione o porte'),
  energy: z.string().nonempty('Selecione o nivel de Energia'),
  independence: z.string().nonempty('Selecione o nivel de independência'),
  petHabitat: z.string().nonempty('Selecione o tamanho do ambiente'),

  images: z
    .array(z.instanceof(File))
    .max(6, 'Máximo de 6 imagens permitidas')
    .min(1, 'Pelo menos 1 imagem deve ser selecionada'),
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

const petSpecies = [
  {
    label: 'Cachorro',
    value: 'dog',
  },
  {
    label: 'Gato',
    value: 'cat',
  },
]

const ambiente = [
  {
    label: 'Ambiente amplo',
    value: 'Amplo',
  },
]

export function CardPetCreate() {
  const methodsUseForm = useForm<PetCreateForm>({
    resolver: zodResolver(schemaPetCreate),
  })
  const { token } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = methodsUseForm

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'adoptionRequirements',
  })

  function addNewRequirements() {
    append({ requirements: '' })
  }

  async function formatPetFormData(data: PetCreateForm) {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('age', data.age)
    formData.append('description', data.description)
    formData.append('energy', data.energy)
    formData.append('independence', data.independence)
    formData.append('size', data.size)
    formData.append('type', data.type)
    formData.append(
      'adoptionRequirements',
      JSON.stringify(
        data.adoptionRequirements.map((item) => item.requirements),
      ),
    )
    for (let i = 0; i < data.images.length; i++) {
      formData.append('images', data.images[i])
    }

    registerPet(formData)
  }

  async function registerPet(formData: FormData) {
    const apiUrl = `${API_BASE_URL}/pets`

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        credentials: 'include',
        body: formData,
      })

      if (!response.ok) {
        const responseBody: { error: string } = await response.json()
        setError('root.serverError', {
          message: responseBody.error || 'Unknown error',
        })
        return
      }

      Toastify({ message: 'Pet Cadastrado', type: 'success' })
    } catch (error) {
      if (error instanceof Error)
        console.error(
          `An error occurred while making the request to ${apiUrl}. Error message:  ${error.message}`,
        )
      return null
    }
  }

  return (
    <Container>
      <header>
        <h1>Adicione um pet</h1>
      </header>

      <FormProvider {...methodsUseForm}>
        <FormPetInformation onSubmit={handleSubmit(formatPetFormData)}>
          <label htmlFor="name">Nome</label>
          <InputWrapper>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </InputWrapper>

          <label htmlFor="size">Espécie</label>

          <InputWrapper>
            <Select
              options={petSpecies}
              register={register('type', { required: true })}
            />
            <ErrorMessage>{errors.type?.message}</ErrorMessage>
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
            <Select
              options={ambiente}
              register={register('petHabitat', { required: true })}
            />
            <ErrorMessage>{errors.petHabitat?.message}</ErrorMessage>
          </InputWrapper>

          <ImageUploader />

          <ErrorMessage>{errors.images?.message}</ErrorMessage>

          <AdoptionRequirementsContainer>
            <h2>Requesitos para adoção</h2>

            <label htmlFor="adoptionRequirements">Requisito</label>
            <InputRequirements>
              <input
                type="text"
                id="adoptionRequirements"
                placeholder="Defina um requisito"
                {...register(`adoptionRequirements.${0}.requirements`)}
              />
              <ErrorMessage>
                {errors.adoptionRequirements?.[0]?.requirements?.message}
              </ErrorMessage>
            </InputRequirements>

            {fields.map((field, index) => {
              if (index === 0) {
                return null
              }
              return (
                <InputRequirements key={field.id}>
                  <div>
                    <input
                      type="text"
                      id="adoptionRequirements"
                      placeholder="Defina um requisito"
                      {...register(
                        `adoptionRequirements.${index}.requirements`,
                      )}
                    />

                    <img src={xSquare} alt="" onClick={() => remove(index)} />
                  </div>

                  <ErrorMessage>
                    {
                      errors.adoptionRequirements?.[index]?.requirements
                        ?.message
                    }
                  </ErrorMessage>
                </InputRequirements>
              )
            })}

            <AddElementButtonContainer
              type="button"
              onClick={addNewRequirements}
            >
              +
            </AddElementButtonContainer>

            <ErrorMessage>{errors.adoptionRequirements?.message}</ErrorMessage>

            <ButtonConfirm type="submit" onClick={() => {}}>
              Confirmar
            </ButtonConfirm>
          </AdoptionRequirementsContainer>
          <ErrorMessage>{errors.root?.serverError.message}</ErrorMessage>
        </FormPetInformation>
      </FormProvider>
    </Container>
  )
}
