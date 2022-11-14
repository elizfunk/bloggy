import {createContext, useReducer} from 'react'

import {adminReducer, initialState} from '../reducers/reducer'

export const AdminUserContext = createContext({
  state: initialState,
  dispatch: () => null,
})

export const AdminUserProvider = ({children}) => {
  const [state, dispatch] = useReducer(adminReducer, initialState)

  return (
    <AdminUserContext.Provider value={{state, dispatch}}>
      {children}
    </AdminUserContext.Provider>
  )
}
