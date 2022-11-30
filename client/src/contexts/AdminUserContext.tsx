import {adminReducer, initialState} from '@/reducers/reducer'
import {createContext, useReducer} from 'react'

export type State = {
  isAdmin: boolean
}

export type AdminUserContextValues = {
  state: State
  dispatch: React.Dispatch<any>
}

export const AdminUserContext = createContext<AdminUserContextValues>({
  state: initialState,
  dispatch: () => null,
})

type Props = {
  children: JSX.Element[] | JSX.Element
}

export const AdminUserProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(adminReducer, initialState)

  return (
    <AdminUserContext.Provider value={{state, dispatch}}>
      {children}
    </AdminUserContext.Provider>
  )
}
