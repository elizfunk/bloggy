import {MouseEventHandler, useContext, useState} from 'react'
import {CSSObject} from '@emotion/react'
import axios from 'axios'
import {BsCapslock} from 'react-icons/bs'
import {BiErrorCircle} from 'react-icons/bi'

import {Button} from '@/components/ui/Button'
import {AdminUserContext} from '@/contexts/AdminUserContext'

const PageStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '60vh',
  fontFamily: 'Raleway',
}

const LoginErrorStyles: CSSObject = {
  color: 'darkred',
  height: '52px',
  width: '350px',
  marginBottom: '34px',
  fontWeight: 'bold',
}

const InputWrapperStyles: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '350px',
  marginBottom: '14px',
}

const InputStyles: CSSObject = {
  fontSize: '1.2em',
  padding: '10px',
}

const ButtonStyles: CSSObject = {
  marginLeft: 'auto',
  marginTop: '24px',
}

const CapsLockStyles: CSSObject = {
  height: '26px',
  textAlign: 'right',
  fontWeight: 'bold',
}

export const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isCapsLock, setIsCapsLock] = useState<boolean>(false)
  const [isLoginError, setIsLoginError] = useState<boolean>(false)
  const {dispatch} = useContext(AdminUserContext)

  console.dir(document)

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault()

    try {
      const res = await axios.post('/api/login', {
        data: {
          password,
          username,
        },
      })

      const isAdmin = res.data.isAdmin

      if (isAdmin) {
        setIsLoginError(false)
        dispatch({
          type: 'AUTHENTICATE_ADMIN',
          payload: {isAdmin},
        })
      } else {
        setIsLoginError(true)
      }
    } catch (error) {
      console.log('error:', error)
      setIsLoginError(true)
    }

    // status code === 403 || data returns Nope setIsForbidden
    // error.code: 'ERR_BAD_REQUEST'
    // error.message: 'Request failed with status code 403
    // error.response.data: Nope.  You are not allowed.'
  }

  return (
    <div css={PageStyles}>
      <form>
        <div css={LoginErrorStyles} role='alert'>
          {isLoginError && (
            <span>
              The username or password you entered is incorrect. Please try
              again. <BiErrorCircle aria-hidden='true' />
            </span>
          )}
        </div>
        <div css={InputWrapperStyles}>
          <label css={InputStyles} htmlFor='username'>
            Username
          </label>
          <input
            css={InputStyles}
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div css={InputWrapperStyles}>
          <label css={InputStyles} htmlFor='password'>
            Password
          </label>
          <input
            css={InputStyles}
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => {
              setIsCapsLock(event.getModifierState('CapsLock'))
              console.log('isCapsLock', isCapsLock)
            }}
          />
        </div>
        <div css={CapsLockStyles} role='alert'>
          {isCapsLock && (
            <span>
              Oops! It looks like Caps Lock is on.{' '}
              <BsCapslock aria-hidden='true' />
            </span>
          )}
        </div>
        <Button
          cssOverrides={ButtonStyles}
          buttonText='Submit'
          buttonStyle='Action'
          handleClick={handleSubmit}
        />
      </form>
    </div>
  )
}
