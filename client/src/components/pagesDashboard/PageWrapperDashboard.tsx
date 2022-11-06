import {NavBarDashboard} from '../navigationDashboard/NavBarDashboard'

type Props = {
  children: JSX.Element[] | JSX.Element
}

export const PageWrapperDashboard: React.FC<Props> = ({children}) => {
  return (
    <div>
      <NavBarDashboard />
      {children}
    </div>
  )
}
