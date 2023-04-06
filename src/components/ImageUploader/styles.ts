import styled from 'styled-components'

export const ImagesContainer = styled.div`
  input {
    display: none;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;
    width: 100%;
    height: 9.5rem;

    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 10px;
    margin-bottom: 1.5rem;

    font-size: 1.125rem;

    outline: none;
  }
`

export const SelectedImagensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8125rem;
  height: 3.125rem;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  margin-bottom: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  > img {
    &:hover {
      cursor: pointer;
    }
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
