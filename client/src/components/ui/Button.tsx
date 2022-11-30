import {CSSObject} from '@emotion/react'
import {MouseEventHandler} from 'react'

type Props = {
  buttonText: string
  buttonStyle: 'Action' | 'Cancel' | 'Link'
  cssOverrides?: CSSObject
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const CommonButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1em',
  fontFamily: 'Raleway',
  width: 'fit-content',
  padding: '14px 20px',
  cursor: 'pointer',
}

const ActionButtonStyles: CSSObject = {
  color: 'white',
  border: 'none',
  backgroundColor: 'green',
  borderRadius: '4px',
  ['&:hover']: {
    backgroundColor: 'darkGreen',
  },
}

const CancelButtonStyles: CSSObject = {
  color: 'black',
  border: '1px solid black',
  backgroundColor: 'none',
  borderRadius: '4px',
  ['&:hover']: {
    backgroundColor: '#f7f7f7',
  },
}

const LinkButtonStyles: CSSObject = {
  color: 'black',
  border: 'none',
  background: 'none',
  ['&:hover']: {
    textDecoration: 'underline',
  },
}

const ButtonStyles = (buttonStyle: string): CSSObject => {
  switch (buttonStyle) {
    case 'Action':
      return {...CommonButtonStyles, ...ActionButtonStyles}
    case 'Cancel':
      return {...CommonButtonStyles, ...CancelButtonStyles}
    case 'Link':
    default:
      return {...CommonButtonStyles, ...LinkButtonStyles}
  }
}

export const Button: React.FC<Props> = ({
  buttonText,
  buttonStyle,
  cssOverrides = {},
  handleClick,
}) => {
  return (
    <button
      css={{...ButtonStyles(buttonStyle), ...cssOverrides}}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  )
}
