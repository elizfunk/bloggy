type Props = {
    linkHref: string
    linkText: string
}

function NavItem({linkHref, linkText}: Props): React.ReactElement {
    return (
     <a href={linkHref}>{linkText}</a>
    )
}
