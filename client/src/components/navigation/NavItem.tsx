type Props = {
  linkHref: string
  linkText: string
}

const navItemStyles = {
  fontFamily: 'Raleway',
  fontSize: '1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '10px',
} as const

export const NavItem: React.FC<Props> = ({
  linkHref,
  linkText,
}): React.ReactElement => {
  return (
    <a css={navItemStyles} href={linkHref}>
      {linkText}
    </a>
  )
}
