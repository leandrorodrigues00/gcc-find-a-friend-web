import styled from 'styled-components'

export const Container = styled.div`
  max-width: 17.5rem;
  width: 100%;
  max-height: 18.75rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 20px;
  background-color: #ffffff;
  overflow: hidden;

  &:hover {
    background-color: #0d3b66;
    cursor: pointer;

    div {
      background-color: #0d3b66;
    }

    p {
      color: #ffffff;
    }
  }
`

export const TypeIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: -1.875rem;
  padding: 0.125rem;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
  }

  img {
    width: 0.937rem;
  }
`

export const PetImage = styled.div`
  object-fit: cover;

  img {
    width: 100%;
    height: 12.5rem;
  }
`

export const Name = styled.p`
  font-size: 1.125rem;
  line-height: 1.35rem;
  font-weight: 700;
  margin: 0.5rem auto 1.062rem;
  color: #0d3b66;
`
