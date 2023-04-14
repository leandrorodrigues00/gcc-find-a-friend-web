import { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

export function Textarea(props: TextareaProps) {
  const { register } = useFormContext()

  return <textarea id={props.name} {...register(props.name)} {...props} />
}
