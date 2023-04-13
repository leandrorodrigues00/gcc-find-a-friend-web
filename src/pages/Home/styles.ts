import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #f15156;
`

export const Hero = styled.main`
  padding: 7.75rem 0.625rem 0.625rem;
  max-width: 90rem;
  margin: 0 auto;

  @media (max-width: 585px) {
    padding-top: 3rem;
  }
`

export const Introduction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.8125rem;
  margin-bottom: 7.5625rem;

  p {
    font-weight: 800;
    font-size: 4.5rem;
    line-height: 90%;
    letter-spacing: -0.02em;
    max-width: 30.43rem;
  }

  img {
    width: 100%;
  }

  @media (max-width: 1030px) {
    p {
      font-size: 3rem;
    }

    > div {
      width: 50%;
      min-width: 18.75rem;
    }
  }

  @media (max-width: 585px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-top: 1.875rem;
  }
`

export const FooterHero = styled.footer`
  display: flex;
  justify-content: space-between;

  p {
    max-width: 25.437rem;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 3.75rem;

    p {
      text-align: center;
    }
  }
`

export const SelectInputs = styled.div`
  display: flex;
  align-items: center;

  div {
    & + div {
      margin-left: 0.625rem;
    }
  }

  > div:nth-child(3) {
    width: 17.5rem;

    select {
      height: 4.5rem;
      margin-bottom: 0.562rem;
    }

    img {
      top: 44%;
    }
  }

  > div:nth-child(2) {
    width: 8.125rem;

    select {
      height: 4.5rem;
      margin-bottom: 0.562rem;
    }

    img {
      top: 44%;
    }
  }

  span {
    line-height: 2.125rem;
    margin-right: 1.437rem;
  }

  button {
    all: unset;
    padding: 1.375rem;
    border-radius: 20px;
    background: #f4d35e;
    margin-left: 2rem;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
      transition: all 0.2s ease-in-out;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`
