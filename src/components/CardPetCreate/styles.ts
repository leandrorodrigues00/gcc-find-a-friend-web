import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  color: #0d3b66;
  background: #fff;
  border-radius: 20px;
  padding: 4rem 5rem 5rem;

  header {
    border-bottom: 1px solid #d3e2e5;
    padding-bottom: 1.375rem;
    margin-bottom: 2.5rem;
    h1 {
      font-size: 2.5rem;
      line-height: 90%;
    }
  }
`

export const FormPetInformation = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    padding: 1.125rem;
    font-size: 1.125rem;
    font-weight: 600;
    outline: none;
  }

  input {
    height: 4rem;
  }

  textarea {
    height: 7.5rem;
    resize: none;
  }
`

export const DescriptionLabel = styled.label`
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 0.5rem;

  > span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 20px;
    margin-left: 1.5rem;
    color: #8fa7b3;
  }
`

export const AddElementButtonContainer = styled.button`
  font-size: 1.687rem;
  color: #e44449;

  height: 4rem;

  background: #fc86861a;
  border: 1px dashed #e44449;
  border-radius: 10px;
`

export const AdoptionRequirementsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 2rem;
    line-height: 90%;
    margin-top: 4.375rem;
    border-bottom: 1px solid #d3e2e5;
    padding-bottom: 1.812rem;
    margin-bottom: 1.812rem;
  }

  > input {
    margin-bottom: 0.75rem;
  }
`

export const ButtonConfirm = styled.button`
  height: 4rem;
  margin-top: 8.375rem;

  background: #f4d35e;
  border-radius: 20px;
  border: none;
`
