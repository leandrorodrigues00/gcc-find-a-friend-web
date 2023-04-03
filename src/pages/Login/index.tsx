import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { API_BASE_URL } from '@/config'

export function Login() {
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

  async function sendLoginRequest(data: LoginForm) {
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
          type: '401',
          message: 'Credenciais inválidas',
        })
      }

      if (!response.ok) {
        throw new Error(
          `Error making request to ${apiUrl}. Method: POST. Status code: ${response.status}.`,
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

  async function handleLogin(data: LoginForm) {
    const response = await sendLoginRequest(data)
    console.log(response)
  }

  function handleRegisterOrganization() {
    // TO DO
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
                  type="password"
                  id="password"
                  placeholder="Senha"
                  {...register('password', { required: true })}
                />
                <img onClick={() => {}} src={passwordEye} alt="" />
              </InputWrapper>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </div>

            <Buttons>
              <Button type="submit" className="primary">
                Login
              </Button>
              <ErrorMessage>{errors.root?.serverError.message}</ErrorMessage>
              <Button type="button" onClick={() => {}} className="secondary">
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
