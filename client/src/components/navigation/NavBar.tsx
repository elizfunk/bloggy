import {NavItem} from "./NavItem"

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

export const NavBar = () => {
    return (
        <nav css={navStyles}>
        <a css={logoLinkStyles} href="/">
            <img css={logoStyles} src="/bloggy.svg" alt="Bloggy logo" />
        </a>
        <NavItem linkHref="/about" linkText="About" />
        <NavItem linkHref="/blog" linkText="Blog" />
        <NavItem linkHref="/extra" linkText="Extra" />
        </nav>
    )
}
