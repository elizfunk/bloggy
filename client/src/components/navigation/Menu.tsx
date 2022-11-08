import {CSSObject} from '@emotion/react'
import React, {useEffect, useRef, useState} from 'react'

import {MenuButton} from './MenuButton'
import {MenuItem} from './MenuItem'
import {delayAndFocus} from '../../utils/delayAndFocus'

type MenuItems = {
  linkHref: string
  linkText: string
}

type MenuProps = {
  buttonText: string
  menuItems: MenuItems[]
}

const MenuStyles: CSSObject = {
  position: 'relative',
}

const MenuListStyles = (isActive: boolean): CSSObject => ({
  display: `${isActive ? 'block' : 'none'}`,
  position: 'absolute',
  top: '40px',
  width: 'max-content',
  padding: '20px',
  border: '1px solid #e6e6e6',
  backgroundColor: 'white',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.10)',
})

/* 
  TODO:
    Handle left / right arrow to move across top nav items.
    Handle left / right arrow to move in and out of sub menu.

    Refactor to only call delayAndFocus once.
    -> Use if/else statements just to set element to receive focus
  
    ** MENU BUTTON **
    (Optional for Menu Button) Up Arrow: opens the menu and moves focus to the last menu item.

*/

export const Menu: React.FC<MenuProps> = ({buttonText, menuItems}) => {
  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent): void => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef?.current?.contains(e.target as Node)
      ) {
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

  const handleMenuButtonClick = React.useCallback(() => {
    setIsActive && setIsActive(!isActive)
    const firstEl = document.getElementById('submenu-0')
    delayAndFocus(firstEl)
  }, [isActive, setIsActive])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.code === 'Escape' || e.key === 'Escape') {
        setIsActive && setIsActive(!isActive)
      }

      if ((e.code === 'Tab' || e.key === 'Tab') && isActive) {
        setIsActive && setIsActive(!isActive)
      }

      const targetEl = e.target as HTMLElement

      if (targetEl.id && targetEl.id === 'menu-button') {
        if (e.code === 'ArrowDown' || e.key === 'ArrowDown') {
          handleMenuButtonClick()
        }
      }

      if (
        isActive &&
        (e.target as HTMLAnchorElement).id.split('-')[0] === 'submenu'
      ) {
        const elIdx = Number((e.target as HTMLAnchorElement).id.split('-')[1])
        const noOfMenuItems = menuItems.length

        if (e.code === 'ArrowDown' || e.key === 'ArrowDown') {
          if (elIdx < noOfMenuItems - 1) {
            const nextEl = document.getElementById(`submenu-${elIdx + 1}`)
            delayAndFocus(nextEl)
          } else {
            const firstEl = document.getElementById(`submenu-0`)
            delayAndFocus(firstEl)
          }
        }

        if (e.code === 'ArrowUp' || e.key === 'ArrowUp') {
          if (elIdx >= 1) {
            const prevEl = document.getElementById(`submenu-${elIdx - 1}`)
            delayAndFocus(prevEl)
          } else {
            const lastEl = document.getElementById(
              `submenu-${noOfMenuItems - 1}`,
            )
            delayAndFocus(lastEl)
          }
        }
      }
    },
    [isActive, setIsActive],
  )

  return (
    <nav
      aria-labelledby='menu-button'
      css={MenuStyles}
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
    >
      <MenuButton
        buttonText={buttonText}
        handleClick={handleMenuButtonClick}
        isActive={isActive}
      />
      <ul css={MenuListStyles(isActive)}>
        {menuItems.map((item, idx) => (
          <MenuItem
            key={`submenu-${idx}`}
            id={`submenu-${idx}`}
            linkHref={item.linkHref}
            linkText={item.linkText}
          />
        ))}
      </ul>
    </nav>
  )
}
