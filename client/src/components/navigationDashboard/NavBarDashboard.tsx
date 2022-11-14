import {CSSObject} from '@emotion/react'

import {LogoLinkStyles, LogoStyles, NavStyles} from '../navigation/NavBar'
import {NavItem} from '../navigation/NavItem'

const LogoutStyles: CSSObject = {
  fontFamily: 'Raleway',
  fontSize: '1em',
  marginLeft: 'auto',
  marginRight: '20px',
  padding: '10px',
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
        <div css={LogoutStyles}>Logout</div>
      </ul>
    </nav>
  )
}
