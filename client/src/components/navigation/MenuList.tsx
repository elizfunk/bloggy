import {useEffect, useRef} from 'react'

import {IsActive, MenuContextInterface, useMenu} from './useMenu'

type MenuListProps = {
  children: JSX.Element[]
}

const MenuListStyles = (isActive: IsActive) =>
({
  display: `${isActive ? 'block' : 'none'}`,
  position: 'absolute',
  top: '40px',
  width: 'max-content',
  padding: '20px',
  border: '1px solid #e6e6e6',
  backgroundColor: 'white',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.10)',
} as const)

export const MenuList: React.FC<MenuListProps> = (props) => {
  const {isActive}: MenuContextInterface = useMenu()
  const {children} = props

  return <ul css={MenuListStyles(isActive)}>{children}</ul>
}
