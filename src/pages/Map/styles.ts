import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  background-color: #fdeced;
  padding: 9.625rem 2rem 3.125rem;

  height: 100vh;
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
  border-radius: 14.992px;
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
`
