import {CSSObject} from '@emotion/react'

type Props = {
  buttonText: string
  buttonType: 'Action' | 'Cancel'
  handleClick: () => void
}

const ButtonStyles = (buttonType: string): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  width: 'fit-content',
  padding: '14px 20px',
  cursor: 'pointer',
  color: `${buttonType === 'Action' ? 'white' : 'black'}`,
  border: `${buttonType === 'Action' ? 'none' : '1px solid black'}`,
  backgroundColor: `${buttonType === 'Action' ? 'green' : 'none'}`,
  borderRadius: '4px',
})

export const Button: React.FC<Props> = ({
  buttonText,
  buttonType,
  handleClick,
}) => {
  return (
    <div css={ButtonStyles(buttonType)} onClick={handleClick}>
      {buttonText}
    </div>
  )
}
