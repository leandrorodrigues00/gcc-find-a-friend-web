import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  background-color: #fdeced;
  padding: 5.625rem 2rem 3.125rem;

  min-height: 100vh;
  overflow-y: scroll;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.875rem;

  p {
    font-size: 1.25rem;
    line-height: 2.125rem;
    font-weight: 400;
    color: #0d3b66;
  }
  span {
    font-weight: 800;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 0.625rem;
  }
`

export const SelectWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 1.125rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const HeaderSelect = styled.select`
  width: 13.125rem;
  height: 3rem;
  padding: 0.875rem 1.125rem;
  border: none;
  border-radius: 15px;
  background-color: #fbe1e2;
  outline: none;
  appearance: none;

  font-family: Nunito;
  font-size: 1rem;
  color: #0d3b66;
`

export const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(17.5rem, 1fr));
  grid-gap: 2rem;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, minmax(17.5rem, 1fr));
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`

export const LoginButtonContainer = styled.div`
  p {
    color: #0d3b66;
    text-align: right;
    padding-bottom: 64px;

    span {
      font-weight: bolder;
      padding: 0.25rem;
      color: #f15156;
      cursor: pointer;
    }
  }
`
