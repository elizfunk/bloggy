import {CSSObject} from '@emotion/react'
import {BsChevronDown} from 'react-icons/bs'

import {MenuContextInterface, useMenu} from './useMenu'

type MenuButtonProps = {
  buttonText: string
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

export const MenuButton: React.FC<MenuButtonProps> = ({buttonText}) => {
  const {isActive, setIsActive}: MenuContextInterface = useMenu()
  return (
    <>
      <button
        id="menu-button"
        role="button"
        aria-haspopup="menu"
        aria-expanded={isActive}
        css={MenuButtonStyles}
        onClick={() => {
          setIsActive && setIsActive(!isActive)
          const firstEl = document.getElementById('submenu-0')
          setTimeout(() => {
            firstEl && firstEl.focus()
          }, 0)
        }}
      >
        <div>{buttonText}</div>
        <div aria-hidden css={IconStyles}>
          <BsChevronDown />
        </div>
      </button>
    </>
  )
}
