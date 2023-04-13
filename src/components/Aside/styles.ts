import styled from 'styled-components'

export const Container = styled.aside`
  width: 24.5rem;
  min-height: 100vh;
  background-color: #f15156;

  @media (max-width: 1050px) {
    width: 17rem;
  }

  @media (max-width: 545px) {
    width: 9.062rem;
  }
`

export const AsideHeader = styled.div`
  height: 15rem;
  background-color: #e44449;

  @media (max-width: 545px) {
    height: 18.562rem;
  }

  img {
    width: 2.812rem;
    height: 2.875rem;
  }

  & > div {
    padding: 5.062rem 3rem 1.625rem;
    display: flex;
    flex-direction: column;
    gap: 1.625rem;

    @media (max-width: 1050px) {
      padding: 5.062rem 1rem 1.625rem;
    }

    @media (max-width: 545px) {
      padding: 0.625rem;
    }
  }
`

export const HeaderInput = styled.div`
  display: grid;
  grid-template-columns: minmax(67px, 1fr) 3fr 1fr;
  gap: 0.75rem;

  @media (max-width: 545px) {
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(1) {
    max-width: 4.187rem;
    width: 100%;

    img {
      width: 0.75rem;
      right: 0.5rem;
      top: 47%;
    }
  }

  > div:nth-child(2) {
    max-width: 9.062rem;
    width: 100%;

    select {
      padding-right: 2.437rem;
    }
  }

  > div {
    div {
      img {
        width: 1rem;
      }
    }
  }

  button {
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f4d35e;
    border: none;
    border-radius: 20px;
    transition: filter 0.2s;

    img {
      width: 1.375rem;
    }

    :hover {
      filter: brightness(0.9);
    }
  }
`

export const AsideContent = styled.div`
  height: calc(100vh - 241px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 2.187rem 3.5rem;

  @media (max-width: 545px) {
    padding: 0.625rem 0.312rem;
  }
`

export const ContentHeader = styled.h1`
  font-size: 1.25rem;
  line-height: 2.125rem;
  margin-bottom: 1.687rem;
`

export const ContentFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`
