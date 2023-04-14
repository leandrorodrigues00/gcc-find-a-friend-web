import { ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import chevron from '@/assets/icons/chevron-bottom.svg'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label?: string
  name?: string
  register?: UseFormRegisterReturn
  options: {
    value: string | number
    label: string
  }[]
}

export function Select({
  label,
  name,
  register,
  options,
  value,
  ...rest
}: SelectProps) {
  return (
    <Filter>
      {label && <FilterLabel htmlFor={name}>{label}</FilterLabel>}

      <FilterWrapper>
        <FilterInput name={name} id={name} {...rest} {...register}>
          <FilterInputOption value="" disabled selected>
            Selecione
          </FilterInputOption>
          {options.map((option) => {
            return (
              <FilterInputOption
                key={option.value}
                value={option.value}
                selected={option.value === value}
              >
                {option.label}
              </FilterInputOption>
            )
          })}
        </FilterInput>
        <img src={chevron} alt="" />
      </FilterWrapper>
    </Filter>
  )
}
