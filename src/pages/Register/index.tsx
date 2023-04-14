import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { API_BASE_URL } from '@/config'
import { usePlace } from '@/context/LocationContext'
import { CoordinatesMapApiResponse } from '../PetDetails'
import { MapOrg } from '@/pages/PetDetails/components/MapOrg'
import { Toastify } from '@/components/Toastify'
import { Form } from '@/components/Form'

import { lineOfDogs, logoHorizontal, passwordEye } from '@/assets/icons'
import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  InputWrapper,
  Buttons,
  Button,
  MapContainer,
  FormComponent,
} from './styles'

const schemaRegister = z
  .object({
    name: z.string().min(5, 'insira um nome com pelo menos 5 caracteres'),
    email: z.string().email({ message: 'insira um e-mail válido' }),
    cep: z.string().regex(/^(\d{5})-?(\d{3})$/, 'insira um CEP válido'),
    address: z
      .string()
      .min(5, 'Insira um endereço com pelo menos 5 caracteres'),
    whatsappNumber: z
      .string()
      .regex(
        /^([1-9]{2})9[0-9]{8}$/,
        'formato invalido, inserir ddd + número, ex: 11987654321',
      )
      .transform((whatsappNumber) => '+55' + whatsappNumber),
    password: z
      .string()
      .min(6, 'Por favor, insira uma senha com pelo menos 6 caracteres'),
    passwordConfirm: z
      .string()
      .min(6, 'Por favor, insira uma senha com pelo menos 6 caracteres'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirm'],
  })

type RegisterForm = z.infer<typeof schemaRegister>

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { fetchData, setOrgCoordinates, orgCoordinates } = usePlace()
  const navigate = useNavigate()

  const useFormRegister = useForm<RegisterForm>({
    resolver: zodResolver(schemaRegister),
  })

  const {
    handleSubmit,
    setError,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormRegister

  const watchCep = watch('cep')

  async function handleRegisterOrganization(data: RegisterForm) {
    const apiUrl = `${API_BASE_URL}/orgs`

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const responseBody: { error: string } = await response.json()
        setError('root.serverError', {
          message: responseBody.error || 'Unknown error',
        })
        return
      }

      NavigateToLogin()
    } catch (error) {
      if (error instanceof Error)
        console.error(
          `An error occurred while making the request to ${apiUrl}. Error message:  ${error.message}`,
        )
      return null
    }
  }

  async function handleRenderMapLocation() {
    const apiUrl = `${API_BASE_URL}/location/coordinates/${watchCep}`

    try {
      const data = await fetchData<CoordinatesMapApiResponse>(apiUrl)

      if (!data && !errors.cep) {
        setError('cep', {
          message:
            'Atenção! cep não localizado, deseja continuar mesmo assim ?',
        })
      } else {
        if (data) {
          clearErrors('cep')
          setOrgCoordinates(data.coordinates)
          setValue('address', data.address)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  function NavigateToLogin() {
    setIsLoading(true)
    Toastify({
      message:
        'Seu cadastro está sendo concluído! Em breve você será redirecionado para a tela de login.',
      type: 'success',
    })
    setTimeout(() => {
      navigate('/login')
      setIsLoading(false)
    }, 6000) // 5 seconds
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={logoHorizontal} className="logo" alt="" />
          <img src={lineOfDogs} className="dogsImage" alt="" />
        </Card>

        <FormProvider {...useFormRegister}>
          <FormWrapper>
            <h1>Cadastre sua organização</h1>
            <FormComponent onSubmit={handleSubmit(handleRegisterOrganization)}>
              <Form.Label htmlFor="name">Nome do responsável</Form.Label>
              <div>
                <InputWrapper>
                  <Form.Input name="name" placeholder="John Doe" />
                </InputWrapper>
                <Form.ErrorMessage field="name" />
              </div>

              <Form.Label htmlFor="email">Email</Form.Label>
              <div>
                <InputWrapper>
                  <Form.Input name="email" placeholder="mayk@email.com" />
                </InputWrapper>
                <Form.ErrorMessage field="email" />
              </div>

              <Form.Label htmlFor="cep">CEP</Form.Label>
              <div>
                <InputWrapper>
                  <Form.Input
                    name="cep"
                    placeholder="13254-000"
                    onBlur={handleRenderMapLocation}
                  />
                </InputWrapper>
                <Form.ErrorMessage field="cep" />
              </div>

              <Form.Label htmlFor="address">Endereço</Form.Label>

              <div>
                <InputWrapper>
                  <Form.Input
                    name="address"
                    placeholder="Rua do Meio, 1825"
                    onBlur={handleRenderMapLocation}
                  />
                </InputWrapper>
                <Form.ErrorMessage field="address" />
              </div>

              {orgCoordinates && (
                <MapContainer>
                  <MapOrg />
                </MapContainer>
              )}

              <Form.Label htmlFor="whatsappNumber">Whatsapp</Form.Label>
              <div>
                <InputWrapper>
                  <Form.Input
                    name="whatsappNumber"
                    placeholder="99 99999 9999"
                  />
                </InputWrapper>
                <Form.ErrorMessage field="whatsappNumber" />
              </div>

              <Form.Label htmlFor="password">Senha</Form.Label>
              <div>
                <InputWrapper>
                  <Form.Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                  />
                  <img
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                    src={passwordEye}
                    alt=""
                  />
                </InputWrapper>
                <Form.ErrorMessage field="password" />
              </div>

              <Form.Label htmlFor="passwordConfirm">Confirmar senha</Form.Label>

              <div>
                <InputWrapper>
                  <Form.Input
                    name="passwordConfirm"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirme sua senha"
                  />

                  <img
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                    src={passwordEye}
                    alt=""
                  />
                </InputWrapper>
                <Form.ErrorMessage field="passwordConfirm" />
              </div>

              <Buttons>
                <Button
                  type="submit"
                  onClick={() => {}}
                  className="primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </Button>
                <Form.ErrorMessage field="root.serverError" />
              </Buttons>
            </FormComponent>
          </FormWrapper>
        </FormProvider>
      </Container>
    </Wrapper>
  )
}
