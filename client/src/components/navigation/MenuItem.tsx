type MenuItemProps = {
  linkHref: string
  linkText: string
}

const MenuItemStyles = {
  fontFamily: 'Raleway',
  padding: '10px',
}

const MenuLinkStyles = {
  textDecoration: 'none',
}

export const MenuItem: React.FC<MenuItemProps> = ({linkHref, linkText}) => {
  return (
    <div css={MenuItemStyles}>
      <a css={MenuLinkStyles} href={linkHref}>
        {linkText}
      </a>
    </div>
  )
}
