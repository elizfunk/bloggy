function NavBar() {
    const navStyles = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'pink',
    }
    const logoStyles = {
        width: '40px',
        height: '40px',
    }

    return (
        <nav css={navStyles}>
            <a href="/">
            <img css={logoStyles} src="/bloggy.svg" alt="Bloggy logo" />
            </a>
            Hey, this is a nav bar.  Woo hoo!
        </nav>
    )
}

export default NavBar
