import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #f15156;
`

export const Hero = styled.main`
  padding-top: 7.75rem;
  max-width: 90rem;
  margin: 0 auto;
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
`

export const FooterHero = styled.footer`
  display: flex;
  justify-content: space-between;

  p {
    max-width: 407px;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
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
      height: 72px;
      margin-bottom: 9px;
    }

    img {
      top: 44%;
    }
  }

  > div:nth-child(2) {
    width: 8.125rem;

    select {
      height: 72px;
      margin-bottom: 9px;
    }

    img {
      top: 44%;
    }
  }

  span {
    line-height: 2.125rem;
    margin-right: 1.4375rem;
  }

  button {
    all: unset;
    padding: 22px;
    border-radius: 20px;
    background: #f4d35e;
    margin-left: 2rem;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
      transition: all 0.2s ease-in-out;
    }
  }
`
