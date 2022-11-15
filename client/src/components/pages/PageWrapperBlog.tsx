import {NavBar} from '../navigation/NavBar'
import {Footer} from '../footer/Footer'

export const NAV_HEIGHT = 64
export const FOOTER_HEIGHT = 80

type Props = {
  children: JSX.Element[] | JSX.Element
}

export const PageWrapperBlog: React.FC<Props> = ({children}) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
