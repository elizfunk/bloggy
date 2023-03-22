import {CSSObject} from '@emotion/react'

type Props = {
  type: string // create enum?
  name: string
  id: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputStyles: CSSObject = {
  fontSize: '1.2em',
  padding: '10px',
}

export const TextInputField = ({
  type,
  name,
  id,
  value,
  handleChange,
}: Props) => {
  return (
    <input
      css={InputStyles}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
    />
  )
}
