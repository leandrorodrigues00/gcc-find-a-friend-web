import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputStyles } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return <InputStyles id={props.name} {...register(props.name)} {...props} />
}
