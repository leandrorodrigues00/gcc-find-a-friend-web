import { DeepMap, FieldError, FieldValues, useForm } from 'react-hook-form'
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

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>

export function Login() {
  const schema = z.object({
    email: z.string().email({ message: 'E-mail incorreto' }),
    password: z.string().min(5, { message: 'Minimo de 5 digitos para senha' }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: FieldErrors = useForm({
    resolver: zodResolver(schema),
  })

  // const onSubmit = (data) => console.log(data.email)
  async function handleLogin(data) {
    const requestBody = {
      email: data.email,
      password: data.password,
    }
    await fetch(`${API_BASE_URL}/auth/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
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
              <Button type="submit" onClick={() => {}} className="primary">
                Login
              </Button>
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
