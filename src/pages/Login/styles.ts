import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.main`
  max-width: 69.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.625rem;
  }
`

export const Card = styled.div`
  width: 30.5rem;
  height: 41.312rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #f15156;
  border-radius: 20px;
  padding: 6.687rem 3.25rem 2.437rem;

  .logo {
    width: 10.875rem;
  }

  .dogsImage {
    width: 100%;
  }

  @media (max-width: 700px) {
    max-width: 30.5rem;
    width: 100%;
    height: auto;
    margin-top: 0.625rem;
    gap: 0.937rem;
    padding: 3.125rem 3.25rem 2.437rem;
  }
`

export const FormWrapper = styled.div`
  width: 30.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 1.875rem 0.625rem;

  h1 {
    font-size: 3.375rem;
    color: #0d3b66;
    line-height: 90%;
    letter-spacing: -2px;
    margin-bottom: 6.312rem;
  }

  @media (max-width: 700px) {
    max-width: 30.5rem;
    width: 100%;
    padding: 0 1.875rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  padding: 1.125rem;
`

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.937rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 0.5rem;
  }

  img {
    cursor: pointer;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.312rem;
  margin-top: 3.812rem;

  .primary {
    color: #ffffff;
    background-color: #0d3b66;
  }

  .secondary {
    color: #0d3b66;
    background-color: #f5f8fa;
  }
`
export const Button = styled.button`
  width: 100%;
  height: 4.5rem;

  font-size: 1.25rem;
  font-weight: 800;
  text-align: center;
  border-radius: 20px;
  padding: 1.187rem auto;
  border: none;
`
