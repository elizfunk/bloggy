type Props = {
    linkHref: string
    linkText: string
}

const navItemStyles = {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '10px',
}  as const

export const NavItem = ({linkHref, linkText}: Props): React.ReactElement => {
    return (
     <a css={navItemStyles} href={linkHref}>{linkText}</a>
    )
}


