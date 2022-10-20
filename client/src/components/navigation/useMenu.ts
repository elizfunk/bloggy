import {createContext, Dispatch, SetStateAction, useContext} from 'react'

export type IsActive = boolean | undefined
export type SetIsActive = Dispatch<SetStateAction<boolean>> | undefined

export interface MenuContextInterface {
  isActive: IsActive
  setIsActive: SetIsActive
}

export const MenuContext = createContext<MenuContextInterface>({
  isActive: undefined,
  setIsActive: undefined,
})

export const useMenu = () => {
  return useContext(MenuContext)
}
