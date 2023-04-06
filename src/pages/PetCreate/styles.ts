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
  }
`
export const InnerContainer = styled.div`
  max-width: 44rem;
  width: 100%;
  margin: 2.5rem auto;

  > header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.937rem;
    background: #0d3b66;
    padding: 1.75rem 0;

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
      font-size: 1.875rem;
      line-height: 90%;
    }

    p:nth-child(2) {
      font-weight: 600;
      font-size: 1rem;
      line-height: 175%;
    }
  }
`
