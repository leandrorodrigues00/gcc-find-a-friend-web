import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAuth } from '@/context/AuthContext'
import { API_BASE_URL } from '@/config'

import { lineOfDogs, logoHorizontal, passwordEye } from '@/assets/icons'

import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  FormComponent,
  InputWrapper,
  Buttons,
  Button,
} from './styles'
import { Form } from '@/components/Form'

export interface LoginResponse {
  org: {
    address: string
    cep: string
    email: string
    id: string
    nome: string
    whatsappNumber: string
  }
  token: string
}

const schemaLogin = z.object({
  email: z.string().email({ message: 'E-mail incorreto' }),
  password: z.string().min(5, { message: 'Minimo de 5 digitos para senha' }),
})
type LoginForm = z.infer<typeof schemaLogin>

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const { setToken } = useAuth()
  const navigate = useNavigate()

  const useFormLogin = useForm<LoginForm>({
    resolver: zodResolver(schemaLogin),
  })

  const { handleSubmit, setError } = useFormLogin

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
        const json: LoginResponse = await response.json()

        localStorage.setItem('@findAFriend:orgAddress', JSON.stringify(json))
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

  async function handleLogin(data: LoginForm) {
    const response = await sendLoginRequest(data)
    if (response && response.token) {
      setToken(response.token)
      navigate('/pet-create')
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
          <img src={lineOfDogs} className="dogsImage" alt="" />
        </Card>

        <FormProvider {...useFormLogin}>
          <FormWrapper>
            <h1>Boas-vindas!</h1>
            <FormComponent onSubmit={handleSubmit(handleLogin)}>
              <Form.Label htmlFor="email">Email</Form.Label>
              <div>
                <InputWrapper>
                  <Form.Input name="email" placeholder="Email" />
                </InputWrapper>
                <Form.ErrorMessage field="email" />
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
                    alt="Botão para mostrar a senha"
                    id="password-icon"
                  />
                </InputWrapper>
                <Form.ErrorMessage field="password" />
              </div>

              <Buttons>
                <Button type="submit" className="primary">
                  Login
                </Button>

                <Form.ErrorMessage field="root.serverError" />

                <Button
                  type="button"
                  onClick={handleRegisterOrganization}
                  className="secondary"
                >
                  Cadastrar minha organização
                </Button>
              </Buttons>
            </FormComponent>
          </FormWrapper>
        </FormProvider>
      </Container>
    </Wrapper>
  )
}
