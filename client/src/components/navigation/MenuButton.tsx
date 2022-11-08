import {CSSObject} from '@emotion/react'
import {BsChevronDown} from 'react-icons/bs'

type MenuButtonProps = {
  buttonText: string
  handleClick: () => void
  isActive: boolean
}

const MenuButtonStyles: CSSObject = {
  display: 'flex',
  fontFamily: 'Raleway',
  fontSize: '1em',
  textTransform: 'uppercase',
  padding: '10px',
  border: 'none',
  background: 'none',
}

const IconStyles: CSSObject = {
  marginLeft: '10px',
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  buttonText,
  handleClick,
  isActive,
}) => {
  return (
    <>
      <button
        id='menu-button'
        role='button'
        aria-haspopup='menu'
        aria-expanded={isActive}
        css={MenuButtonStyles}
        onClick={handleClick}
      >
        <div>{buttonText}</div>
        <div aria-hidden css={IconStyles}>
          <BsChevronDown />
        </div>
      </button>
    </>
  )
}
