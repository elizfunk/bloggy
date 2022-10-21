import React, {useEffect, useRef, useState} from 'react'
import {MenuContext} from './useMenu'

type MenuProps = {
  children: JSX.Element[]
}

const MenuStyles = {
  position: 'relative',
} as const

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

  const handleKeyUp = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.code === "Escape" || e.key === "Escape") {
      setIsActive && setIsActive(!isActive)
    }

    if ((e.code === "Tab" || e.key === "Tab") && isActive) {
      setIsActive && setIsActive(!isActive)
    }
  }

  return (
    <MenuContext.Provider value={{isActive, setIsActive}}>
      <nav
        aria-labelledby="menu-button"
        css={MenuStyles}
        ref={dropdownRef}
        onKeyUp={handleKeyUp}
      >
        {children}
      </nav>
    </MenuContext.Provider>
  )
}
