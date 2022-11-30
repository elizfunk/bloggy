import {Footer} from '@/components/footer/Footer'
import {NavBar} from '@/components/navigation/NavBar'

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
