import {State} from '@/contexts/AdminUserContext'

type Action = {
  type: 'AUTHENTICATE_ADMIN' | 'LOGOUT_ADMIN'
  payload: State
}

export const adminReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE_ADMIN':
      return action.payload || {isAdmin: false}
    case 'LOGOUT_ADMIN':
      return {isAdmin: false}

    default:
      return state
  }
}

export const initialState = {
  isAdmin: false,
}
