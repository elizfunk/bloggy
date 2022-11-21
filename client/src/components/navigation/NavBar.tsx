import {CSSObject} from '@emotion/react'

import {NavItem} from '@/components/navigation/NavItem'
import {Menu} from '@/components/navigation/Menu'

export const NavStyles: CSSObject = {
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  backgroundColor: '#f7f7f7',
  borderBottom: '1px solid #e6e6e6',
}

export const LogoStyles: CSSObject = {
  width: '50px',
  height: '50px',
  padding: '12px 14px',
  marginLeft: '20px',
}

export const LogoLinkStyles: CSSObject = {
  display: 'flex',
}

const funMenuItems = [
  {
    linkHref: 'http://jacksonpollockii.com',
    linkText: 'Paint Like Jackson Pollock',
  },
  {
    linkHref: 'https://yahoo.com',
    linkText: 'Yahoo',
  },
  {
    linkHref: 'https://pinterest.com',
    linkText: 'Pinterest',
  },
]

export const NavBar: React.FC = () => {
  return (
    <nav>
      <ul css={NavStyles}>
        <a css={LogoLinkStyles} href='/'>
          <img css={LogoStyles} src='/bloggy.svg' alt='Bloggy logo' />
        </a>
        <NavItem linkHref='/about' linkText='About' />
        <NavItem linkHref='/blog' linkText='Blog' />
        <Menu buttonText='Fun' menuItems={funMenuItems} />
      </ul>
    </nav>
  )
}
