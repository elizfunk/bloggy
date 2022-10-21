import {MenuContextInterface, useMenu} from './useMenu'

type MenuButtonProps = {
  buttonText: string
}

const MenuButtonStyles = {
  fontFamily: 'Raleway',
  fontSize: '1em',
  textTransform: 'uppercase',
  padding: '10px',
  border: 'none',
  background: 'none',
} as const

export const MenuButton: React.FC<MenuButtonProps> = ({buttonText}) => {
  const {isActive, setIsActive}: MenuContextInterface = useMenu()
  return (
    <>
      <button
        id="menu-button"
        aria-expanded={isActive}
        css={MenuButtonStyles}
        onClick={() => {
          setIsActive && setIsActive(!isActive)
          const firstEl = document.getElementById("submenu-0")
          setTimeout(() => {
            firstEl && firstEl.focus()
          }, 0)
        }}
      >
        {buttonText}
      </button>
    </>
  )
}
