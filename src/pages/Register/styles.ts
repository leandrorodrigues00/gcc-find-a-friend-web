import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.main`
  max-width: 69.5rem;
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
`

export const Card = styled.div`
  width: 30.5rem;
  height: 41.312rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  position: sticky;
  left: 0;
  top: 0;

  background-color: #f15156;
  border-radius: 20px;
  padding: 6.687rem 3.25rem 2.437rem;

  .logo {
    width: 10.875rem;
  }
`

export const FormWrapper = styled.div`
  width: 30.5rem;
  height: 41.312rem;
  display: block;
  overflow-y: auto;
  padding-right: 10px;

  h1 {
    font-size: 3.375rem;
    color: #0d3b66;
    line-height: 90%;
    letter-spacing: -2px;
    text-align: center;
    margin-bottom: 6.312rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  padding: 1.125rem;

  .no-margin {
    margin-bottom: 0;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 600;
    color: #0d3b66;
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: #c6c6c6;
    }
  }

  img {
    cursor: pointer;
  }

  > div {
    margin-bottom: 2rem;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.937rem;
  margin-top: 3.812rem;
  margin-bottom: 0.12rem;

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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ErrorMessage = styled.p`
  color: #e44449;
`

export const MapContainer = styled.div`
  > div {
    height: 12.5rem;
  }
`
