import {CSSObject} from '@emotion/react'

type MenuItemProps = {
  id: string
  linkHref: string
  linkText: string
}

const MenuItemStyles: CSSObject = {
  fontFamily: 'Raleway',
  padding: '10px',
  listStyle: 'none',
  borderRadius: '4px',
  ['&:hover']: {
    backgroundColor: '#f7f7f7',
  },
}

const MenuLinkStyles: CSSObject = {
  textDecoration: 'none',
}

export const MenuItem: React.FC<MenuItemProps> = ({id, linkHref, linkText}) => {
  return (
    <li css={MenuItemStyles}>
      <a
        id={id}
        css={MenuLinkStyles}
        href={linkHref}
      >
        {linkText}
      </a>
    </li>
  )
}
