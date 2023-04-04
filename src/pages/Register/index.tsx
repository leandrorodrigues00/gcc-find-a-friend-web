import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

import { lineOfDogs, logoHorizontal, passwordEye } from '@/assets/icons'
import { usePlace } from '@/context/LocationContext'
import { CoordinatesMapApiResponse } from '../PetDetails'
import { API_BASE_URL } from '@/config'
import { MapOrg } from '@/components/MapOrg'

export function Register() {
  const schemaRegister = z
    .object({
      name: z.string().min(5, 'insira um nome com pelo menos 5 caracteres'),
      email: z.string().email({ message: 'insira um e-mail válido' }),
      cep: z
        .string()
        .regex(/^\d{5}-\d{3}$/, 'insira um CEP válido no formato: 12345-678'),
      address: z
        .string()
        .min(5, 'Insira um endereço com pelo menos 5 caracteres'),
      contact: z
        .string()
        .regex(
          /^\+55\d{11}$/,
          'Insira um numero valido, com código internaciona e DDD, ex: +5511987654321',
        ),
      password: z
        .string()
        .min(6, 'Por favor, insira uma senha com pelo menos 6 caracteres'),
      confirmPassword: z
        .string()
        .min(6, 'Por favor, insira uma senha com pelo menos 6 caracteres'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem',
      path: ['confirmPassword'],
    })

  type RegisterForm = z.infer<typeof schemaRegister>

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

  const { fetchData, setOrgCoordinates, orgCoordinates } = usePlace()
  const watchCep = watch('cep')

  function handleRegisterOrganization(data: RegisterForm) {
    console.log(data)
  }

  async function handleRenderMapLocation() {
    const data = await fetchData<CoordinatesMapApiResponse>(
      `${API_BASE_URL}/location/coordinates/${watchCep}`,
    )
    if (!data && !errors.cep) {
      setError('cep', {
        message: 'Alerta! cep não localizado, continuar mesmo assim ?',
      })
    } else {
      if (data) {
        clearErrors('cep')
        setOrgCoordinates(data.coordinates)
        setValue('address', data.address)
      }
    }
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

            <label htmlFor="contact">Whatsapp</label>
            <div>
              <InputWrapper>
                <input
                  type="text"
                  id="contact"
                  {...register('contact', { required: true })}
                  placeholder="99 99999 9999"
                />
              </InputWrapper>
              <ErrorMessage>{errors.contact?.message}</ErrorMessage>
            </div>

            <label htmlFor="password">Senha</label>
            <div>
              <InputWrapper>
                <input
                  type="password"
                  id="password"
                  {...register('password', { required: true })}
                  placeholder="Senha"
                />
                <img onClick={() => {}} src={passwordEye} alt="" />
              </InputWrapper>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </div>

            <label htmlFor="confirmPassword">Confirmar senha</label>

            <div>
              <InputWrapper>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register('confirmPassword', { required: true })}
                  placeholder="Confirme sua senha"
                />
                <img onClick={() => {}} src={passwordEye} alt="" />
              </InputWrapper>
              <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
            </div>

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                Cadastrar
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
