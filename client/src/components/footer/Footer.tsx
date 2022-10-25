import {CSSObject} from '@emotion/react'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

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
}

export const Footer = () => {
  return (
    <footer css={FooterStyles}>
      <a css={LinkStyles} href="https://github.com/elizfunk">
        <div css={TextStyles}>elizfunk</div>
        <BsGithub aria-hidden="true" />
      </a>
      <a css={LinkStyles} href="https://twitter.com/elizfunk">
        <div css={TextStyles}>@elizfunk</div>
        <BsTwitter aria-hidden="true" />
      </a>
      <a css={FooterStyles} href="https://www.linkedin.com/in/funkelizabeth/">
        <div css={TextStyles}>in/funkelizabeth</div>
        <BsLinkedin aria-hidden="true" />
      </a>
    </footer>
  )
}
