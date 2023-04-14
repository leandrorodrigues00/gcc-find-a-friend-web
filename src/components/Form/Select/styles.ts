import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FilterLabel = styled.label`
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 1.125rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const FilterInput = styled.select`
  width: 100%;
  height: 3.75rem;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 800;
  color: #ffffff;
  background-color: #f75f64;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 1.25rem;
  appearance: none;
  position: relative;

  &::before {
    content: '⌄';
    width: 0.75rem;
    height: 0.375rem;
    display: absolute;
    color: #ffffff;
  }
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
  color: #ffffff;
  padding: 0.312rem 0.437rem;
`
