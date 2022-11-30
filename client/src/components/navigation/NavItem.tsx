import {CSSObject} from '@emotion/react'
import {Link} from 'react-router-dom'

type Props = {
  linkHref: string
  linkText: string
}

const LiStyles: CSSObject = {
  listStyle: 'none',
  padding: '10px 0',
  ['&:hover']: {
    backgroundColor: '#e7e7e7',
  },
}

const NavItemStyles: CSSObject = {
  fontFamily: 'Raleway',
  fontSize: '1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '10px',
}

export const NavItem: React.FC<Props> = ({
  linkHref,
  linkText,
}): React.ReactElement => {
  return (
    <li css={LiStyles}>
      <Link css={NavItemStyles} to={linkHref}>
        {linkText}
      </Link>
    </li>
  )
}
