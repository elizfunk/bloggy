export const adminReducer = (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_ADMIN':
      // assign value from payload to state???
      return action.payload || false

    default:
      return state
  }
}

export const initialState = {
  isAdmin: false,
}
