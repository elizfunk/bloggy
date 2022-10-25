import {CSSObject} from '@emotion/react'

type MenuItemProps = {
  linkHref: string
  linkText: string
  idx: number
  noOfMenuItems: number
}

const MenuItemStyles: CSSObject = {
  fontFamily: 'Raleway',
  padding: '10px',
  listStyle: 'none',
  ['&:hover']: {
    backgroundColor: '#f7f7f7',
  },
}

const MenuLinkStyles: CSSObject = {
  textDecoration: 'none',
}

export const MenuItem: React.FC<MenuItemProps> = ({linkHref, linkText, idx, noOfMenuItems}) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    const elIdx = (e.target as HTMLAnchorElement).id.split('-')[1]
    if (e.code === 'ArrowDown' || e.key === 'ArrowDown') {
      if (idx < noOfMenuItems - 1) {
        const nextEl = document.getElementById(`submenu-${idx + 1}`)
        setTimeout(() => {
          nextEl && nextEl.focus()
        }, 0)
      } else {
        const firstEl = document.getElementById(`submenu-0`)
        setTimeout(() => {
          firstEl && firstEl.focus()
        }, 0)
      }
    }

    if (e.code === 'ArrowUp' || e.key === 'ArrowUp') {
      if (idx >= 1) {
        const prevEl = document.getElementById(`submenu-${idx - 1}`)
        setTimeout(() => {
          prevEl && prevEl.focus()
        }, 0)
      } else {
        const lastEl = document.getElementById(`submenu-${noOfMenuItems - 1}`)
        setTimeout(() => {
          lastEl && lastEl.focus()
        }, 0)
      }
    }
  }

  return (
    <li css={MenuItemStyles}>
      <a
        id={`submenu-${idx}`}
        css={MenuLinkStyles}
        href={linkHref}
        onKeyUp={handleKeyUp}
      >
        {linkText}
      </a>
    </li>
  )
}
