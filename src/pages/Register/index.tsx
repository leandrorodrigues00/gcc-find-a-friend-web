import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { usePlace } from '@/context/LocationContext'
import { API_BASE_URL } from '@/config'
import { CoordinatesMapApiResponse } from '../PetDetails'
import { MapOrg } from '@/pages/PetDetails/components/MapOrg'

import { lineOfDogs, logoHorizontal, passwordEye } from '@/assets/icons'
import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
  ErrorMessage,
  MapContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { Toastify } from '@/components/Toastify'

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

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schemaRegister),
  })

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
          <img src={lineOfDogs} alt="" />
        </Card>
        <FormWrapper>
          <h1>Cadastre sua organização</h1>
          <Form onSubmit={handleSubmit(handleRegisterOrganization)}>
            <label htmlFor="name">Nome do responsável</label>
            <div>
              <InputWrapper>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  {...register('name', { required: true })}
                />
              </InputWrapper>
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </div>

            <label htmlFor="email">Email</label>
            <div>
              <InputWrapper>
                <input
                  type="text"
                  id="email"
                  placeholder="mayk@email.com"
                  {...register('email', { required: true })}
                />
              </InputWrapper>
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </div>

            <label htmlFor="cep">CEP</label>
            <div>
              <InputWrapper>
                <input
                  type="text"
                  id="cep"
                  placeholder="13254-000"
                  {...register('cep', { required: true })}
                  onBlur={handleRenderMapLocation}
                />
              </InputWrapper>
              <ErrorMessage>{errors.cep?.message}</ErrorMessage>
            </div>

            <label htmlFor="address">Endereço</label>

            <div>
              <InputWrapper>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: true })}
                  placeholder="Rua do Meio, 1825"
                />
              </InputWrapper>
              <ErrorMessage>{errors.address?.message}</ErrorMessage>
            </div>

            {orgCoordinates && (
              <MapContainer>
                <MapOrg />
              </MapContainer>
            )}

            <label htmlFor="whatsappNumber">Whatsapp</label>
            <div>
              <InputWrapper>
                <input
                  type="text"
                  id="contact"
                  {...register('whatsappNumber', { required: true })}
                  placeholder="99 99999 9999"
                />
              </InputWrapper>
              <ErrorMessage>{errors.whatsappNumber?.message}</ErrorMessage>
            </div>

            <label htmlFor="password">Senha</label>
            <div>
              <InputWrapper>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  {...register('password', { required: true })}
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
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </div>

            <label htmlFor="passwordConfirm">Confirmar senha</label>

            <div>
              <InputWrapper>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="passwordConfirm"
                  {...register('passwordConfirm', { required: true })}
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
              <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
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
              <ErrorMessage>{errors.root?.serverError.message}</ErrorMessage>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
