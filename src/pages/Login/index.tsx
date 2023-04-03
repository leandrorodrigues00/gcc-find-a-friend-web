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
} from './styles'

export function Login() {
  function handleLogin() {
    // TO DO
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
          <Form>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input type="text" name="email" id="email" placeholder="Email" />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
              />
              <img onClick={() => {}} src={passwordEye} alt="" />
            </InputWrapper>

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
