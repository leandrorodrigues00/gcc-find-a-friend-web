import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { API_BASE_URL } from '@/config'

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
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

interface LoginResponse {
  token: string
  org: {
    id: string
    nome: string
    email: string
    address: string
    cep: string
    whatsappNumber: string
  }
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const schemaLogin = z.object({
    email: z.string().email({ message: 'E-mail incorreto' }),
    password: z.string().min(5, { message: 'Minimo de 5 digitos para senha' }),
  })
  type LoginForm = z.infer<typeof schemaLogin>

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schemaLogin),
  })

  async function sendLoginRequest(
    data: LoginForm,
  ): Promise<LoginResponse | null> {
    const apiUrl = `${API_BASE_URL}/auth/sessions`

    const requestBody = {
      email: data.email,
      password: data.password,
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (response.status === 401) {
        setError('root.serverError', {
          message: 'Credenciais inválidas',
        })
      }

      if (!response.ok) {
        throw new Error(
          `Error making request to ${apiUrl}. Status code: ${response.status}.`,
        )
      } else {
        const json = await response.json()
        return json
      }
    } catch (error) {
      if (error instanceof Error)
        console.error(
          `An error occurred while making the request to ${apiUrl}. Error message:  ${error.message}`,
        )
      return null
    }
  }

  const { setToken, isAuthenticated } = useAuth()
  console.log(isAuthenticated)

  async function handleLogin(data: LoginForm) {
    const response = await sendLoginRequest(data)
    if (response && response.token) {
      setToken(response.token)
      // navigate('/userProfile')
    }
  }

  function handleRegisterOrganization() {
    navigate('/Register')
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={logoHorizontal} className="logo" alt="" />
          <img src={lineOfDogs} alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor="email">Email</label>

            <div>
              <InputWrapper>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  {...register('email', { required: true })}
                />
              </InputWrapper>
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </div>

            <label htmlFor="password">Senha</label>

            <div>
              <InputWrapper>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Senha"
                  {...register('password', { required: true })}
                />
                <img
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                  src={passwordEye}
                  alt=""
                  id="password-icon"
                />
              </InputWrapper>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </div>

            <Buttons>
              <Button type="submit" className="primary">
                Login
              </Button>
              <ErrorMessage>{errors.root?.serverError.message}</ErrorMessage>
              <Button
                type="button"
                onClick={handleRegisterOrganization}
                className="secondary"
              >
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
