import {CSSObject} from '@emotion/react'
import React, {useEffect, useRef, useState} from 'react'
import {MenuContext} from './useMenu'

type MenuProps = {
  children: JSX.Element[]
}

const MenuStyles: CSSObject = {
  position: 'relative',
}

/* 
  TODO:
    Refactor Menu to take an array of menu items.
    Refactor Menu to return all sub components.
    Refactor to use REQUEST ANIMATION FRAME instead of setTimeout?

    Handle left / right arrow to move across top nav items.
    Handle left / right arrow to move in and out of sub menu.

    ** MENU BUTTON **
    Add hover styling for Nav and Menu items
    (Optional for Menu Button) Down Arrow: opens the menu and moves focus to the first menu item.
    (Optional for Menu Button) Up Arrow: opens the menu and moves focus to the last menu item.

*/

/**
 * Menu provides context, state, and focus management
 * to its sub-components.  It renders only a simple
 * container to provide relative positioning.
 */
export const Menu: React.FC<MenuProps> = ({children}) => {
  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent): void => {
      if (dropdownRef.current !== null && !dropdownRef?.current?.contains(e.target as Node)) {
        setIsActive && setIsActive(!isActive)
      }
    }

    if (isActive) {
      window.addEventListener('click', pageClickEvent)
    }

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLUListElement>) => {
      if (e.code === 'Escape' || e.key === 'Escape') {
        setIsActive && setIsActive(!isActive)
      }

      if ((e.code === 'Tab' || e.key === 'Tab') && isActive) {
        setIsActive && setIsActive(!isActive)
      }
    },
    [isActive, setIsActive]
  )

  return (
    <MenuContext.Provider value={{isActive, setIsActive}}>
      <nav
        aria-labelledby="menu-button"
        css={MenuStyles}
        ref={dropdownRef}
        onKeyDown={handleKeyDown}
      >
        {children}
      </nav>
    </MenuContext.Provider>
  )
}
