import {MouseEventHandler} from 'react'
import {CSSObject} from '@emotion/react'

type Props = {
  buttonText: string
  buttonStyle: 'Action' | 'Cancel'
  cssOverrides?: CSSObject
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const ButtonStyles = (buttonStyle: string): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1em',
  fontFamily: 'Raleway',
  width: 'fit-content',
  padding: '14px 20px',
  cursor: 'pointer',
  color: `${buttonStyle === 'Action' ? 'white' : 'black'}`,
  border: `${buttonStyle === 'Action' ? 'none' : '1px solid black'}`,
  backgroundColor: `${buttonStyle === 'Action' ? 'green' : 'none'}`,
  borderRadius: '4px',
  ['&:hover']: {
    backgroundColor: `${buttonStyle === 'Action' ? 'darkGreen' : 'none'}`,
  },
})

export const Button: React.FC<Props> = ({
  buttonText,
  buttonStyle,
  cssOverrides,
  handleClick,
}) => {
  let Styles
  if (cssOverrides) {
    Styles = {...ButtonStyles(buttonStyle), ...cssOverrides}
  } else {
    Styles = ButtonStyles(buttonStyle)
  }

  return (
    <button css={Styles} onClick={handleClick}>
      {buttonText}
    </button>
  )
}
