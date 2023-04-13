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

    @media (max-width: 650px) {
      padding: 2rem 0.3125rem;
    }
  }
`
export const InnerContainer = styled.div`
  max-width: 44rem;
  width: 100%;
  margin: 2.5rem auto;
  padding: 0 10px;

  > header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.937rem;
    background: #0d3b66;
    padding: 1.75rem 0.625rem;

    border: 1px solid #ffffff;
    border-radius: 20px;

    > button {
      display: flex;

      background: #114a80;
      border: none;
      border-radius: 0.937rem;
      padding: 1.25rem;
    }
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 1.125rem;
    p:first-child {
      font-weight: 700;
      font-size: 30px;
      line-height: 90%;

      @media (max-width: 430px) {
        font-size: 20px;
      }
    }

    p:nth-child(2) {
      font-weight: 600;
      font-size: 1rem;
      line-height: 175%;
    }
  }
`
