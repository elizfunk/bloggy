import {CSSObject} from '@emotion/react'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

type FooterLinkProps = {
  linkIcon?: React.ReactElement
  linkHref: string
  linkText: string
}

const FooterStyles: CSSObject = {
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
}

const LinkStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: '30px',
  [':last-child']: {
    marginRight: 0,
  },
}

const TextStyles: CSSObject = {
  marginRight: '10px',
  ['@media (max-width: 700px)']: {
    display: 'none',
  },
}

const FooterLink: React.FC<FooterLinkProps> = ({
  linkIcon,
  linkHref,
  linkText,
}) => {
  return (
    <a css={LinkStyles} href={linkHref}>
      <div css={TextStyles}>{linkText}</div>
      {linkIcon && linkIcon}
    </a>
  )
}

export const Footer = () => {
  return (
    <footer css={FooterStyles}>
      <FooterLink
        linkIcon={<BsGithub aria-hidden='true' />}
        linkHref='https://github.com/elizfunk'
        linkText='elizfunk'
      />
      <FooterLink
        linkIcon={<BsTwitter aria-hidden='true' />}
        linkHref='https://twitter.com/elizfunk'
        linkText='@elizfunk'
      />
      <FooterLink
        linkIcon={<BsLinkedin aria-hidden='true' />}
        linkHref='https://www.linkedin.com/in/funkelizabeth/'
        linkText='in/funkelizabeth'
      />
    </footer>
  )
}
