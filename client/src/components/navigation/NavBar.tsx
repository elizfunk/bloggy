import {NavItem} from './NavItem'
import {Menu} from './Menu'
import {MenuButton} from './MenuButton'
import {MenuList} from './MenuList'
import {MenuItem} from './MenuItem'

const navStyles = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f7f7f7',
  borderBottom: '1px solid #e6e6e6',
}

const logoStyles = {
  width: '40px',
  height: '40px',
  padding: '12px 14px',
}

const logoLinkStyles = {
  display: 'flex',
}

export const NavBar: React.FC = () => {
  return (
    <nav css={navStyles}>
      <a css={logoLinkStyles} href="/">
        <img css={logoStyles} src="/bloggy.svg" alt="Bloggy logo" />
      </a>
      <NavItem linkHref="/about" linkText="About" />
      <NavItem linkHref="/blog" linkText="Blog" />
      <Menu>
        <MenuButton buttonText="Extra" />
        <MenuList>
          <MenuItem
            linkHref="http://jacksonpollockii.com"
            linkText="Paint Like Jackson Pollock"
          />
          <MenuItem linkHref="https://yahoo.com" linkText="Yahoo" />
          <MenuItem linkHref="https://pinterest.com" linkText="Pinterest" />
        </MenuList>
      </Menu>
    </nav>
  )
}
