import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  color: #0d3b66;
  background: #fff;
  border-radius: 20px;

  header {
    img {
      max-width: 44rem;
      width: 100%;
      max-height: 23.125rem;
      height: 100%;
      border-radius: 20px 20px 0 0;
    }
  }

  > div {
    margin-top: 2rem;
    > ul {
      display: flex;
      gap: 1rem;
      justify-content: center;
      list-style: none;

      li {
        img {
          max-width: 5rem;
          max-height: 5rem;
          height: 100%;
          width: 100%;
          border-radius: 15px;
          width: 100%;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`

export const InnerContent = styled.div`
  padding: 4.375rem;

  header {
    h1 {
      color: #0d3b66;
      font-size: 3.375rem;
      line-height: 90%;
      text-align: start;
    }

    p {
      color: #0d3b66;
      font-weight: 500;
      line-height: 114%;
      text-align: start;
      margin-top: 1.625rem;
    }
  }
`

export const PetFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0.875rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1.25rem;
    border: 2px solid rgba(13, 59, 102, 0.1);
    padding: 1.625rem;
    margin-top: 2.6875rem;

    > div {
      display: flex;
      justify-content: flex-start;
    }

    p {
      margin-top: 1rem;
      color: #0d3b66;
      font-weight: 500;
      line-height: 100%;
      text-align: left;
    }
  }
`

export const EnergyFeatureImage = styled.div`
  gap: 0.5rem;
`

export const SizeFeatureImage = styled.div`
  gap: 0.1875rem;
`

export const MapContainer = styled.div`
  margin-top: 4.375rem;

  background: #0d3b66;
  border-radius: 25px 25px 20px 20px;

  > div {
    > div {
      height: 227px;
      border-radius: 23px;
    }
  }

  p {
    color: #f4d35e;
    font-weight: Bold;
    font-size: 1.125rem;
    line-height: 102%;
    text-align: center;

    padding: 1.25rem 0;
  }
`

export const AddressContainer = styled.div`
  border-bottom: 1px solid #d3e2e5;
  padding-bottom: 3.125rem;

  > div:first-child {
    display: flex;
    gap: 1.125rem;
    margin-top: 2.5rem;
    border-top: 1px solid #d3e2e5;
    padding-top: 3.125rem;

    > div {
      p:first-child {
        font-weight: Bold;
        font-size: 1.875rem;
        line-height: 90%;
      }

      p:nth-child(2) {
        font-weight: 500;
        line-height: 128%;
        margin-top: 5px;
      }
    }

    img {
      align-self: flex-start;
    }
  }
`

export const WhatsAppIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.437rem;

  gap: 0.687rem;
  padding: 13px 35px 13px 27px;
  background: #f3f5f7;
  border-radius: 10px;
  max-width: 13.562rem;
  width: 100%;

  span {
    font-size: 1.125rem;
    line-height: 114%;
  }
`

export const AdoptionRequirementsContainer = styled.div`
  margin-top: 3.437rem;
  border-bottom: 1px solid #d3e2e5;

  > p {
    font-weight: Bold;
    font-size: 1.875rem;
    line-height: 90%;
  }

  ul {
    margin-top: 2.5rem;
    padding-bottom: 3.125rem;

    li {
      display: flex;
      gap: 0.875rem;
      padding: 0.812rem 0 0.812rem 2.625rem;
      background: linear-gradient(
        to bottom,
        rgba(247, 95, 96, 0.1) 0%,
        rgba(241, 81, 86, 0) 100%
      );
      border: 1px solid #f15156;
      border-radius: 10px;

      p {
        color: #f15156;
        font-size: 1.125rem;
        line-height: 114%;
        font-weight: 600;
      }

      & + li {
        margin-top: 0.625rem;
      }
    }
  }
`

export const ContactButton = styled.a`
  text-decoration: none;
  margin-top: 3.125rem;
  width: 100%;
  border: 0;
  border-radius: 20px;
  background: #3cdc8c;
  color: white;
  padding: 1.1875rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
