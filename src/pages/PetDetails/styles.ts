import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #fdeced;

  aside {
    background: #f15156;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-height: 51.25rem;

    padding: 2rem 1.5rem;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #f4d35e;
      width: 3rem;
      height: 3rem;
      border-radius: 15px;
    }

    @media (max-width: 836px) {
      padding: 2rem 0.625rem;
    }
  }
`

export const InnerContainer = styled.div`
  max-width: 44rem;
  width: 100%;
  margin: 2.5rem auto;

  > p {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    color: #8fa7b3;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 836px) {
    width: auto;
  }
`
