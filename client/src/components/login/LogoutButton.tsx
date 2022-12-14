import {CSSObject} from '@emotion/react'
import axios from 'axios'
import {MouseEventHandler, useContext} from 'react'
import {BsPersonCircle} from 'react-icons/bs'

import {Button} from '@/components/ui/Button'
import {AdminUserContext} from '@/contexts/AdminUserContext'

const LogoutStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Raleway',
  fontSize: '1em',
  marginLeft: 'auto',
  marginRight: '30px',
}

export const LogoutButton: React.FC = () => {
  const {dispatch} = useContext(AdminUserContext)
  const handleLogout: MouseEventHandler<HTMLButtonElement> = async () => {
    const res = await axios.get('/api/logout')

    const isAdmin = res.data.isAdmin

    if (!isAdmin) {
      dispatch({
        type: 'LOGOUT_ADMIN',
      })
    }
  }

  return (
    <div css={LogoutStyles}>
      <Button
        buttonStyle='Link'
        buttonText='Logout'
        handleClick={handleLogout}
      />
      <BsPersonCircle />
    </div>
  )
}
