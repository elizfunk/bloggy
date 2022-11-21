import {CSSObject} from '@emotion/react'

import {
  LogoLinkStyles,
  LogoStyles,
  NavStyles,
} from '@/components/navigation/NavBar'
import {NavItem} from '@/components/navigation/NavItem'
import {LogoutButton} from '@/components/login/LogoutButton'

const LogoutStyles: CSSObject = {
  fontFamily: 'Raleway',
  fontSize: '1em',
  marginLeft: 'auto',
  marginRight: '30px',
}

export const NavBarDashboard: React.FC = () => {
  return (
    <nav>
      <ul css={NavStyles}>
        <a css={LogoLinkStyles} href='/'>
          <img css={LogoStyles} src='/bloggy.svg' alt='Bloggy logo' />
        </a>
        <NavItem linkHref='/dashboard/posts' linkText='Blog Posts' />
        <NavItem linkHref='/dashboard/edit-post' linkText='New Post' />
        <LogoutButton />
      </ul>
    </nav>
  )
}
