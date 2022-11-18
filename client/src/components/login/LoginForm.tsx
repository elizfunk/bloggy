import {MouseEventHandler, useContext, useState} from 'react'
import {CSSObject} from '@emotion/react'
import axios from 'axios'
import {BsCapslockFill} from 'react-icons/bs'

import {Button} from '../ui/Button'
import {AdminUserContext} from '../../contexts/AdminUserContext'

const PageStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '60vh',
  fontFamily: 'Raleway',
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
  const {dispatch} = useContext(AdminUserContext)

  console.dir(document)

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault()
    const res = await axios.post('/api/login', {
      data: {
        password,
        username,
      },
    })

    console.log('res:', res)

    const isAdmin = res.data.isAdmin

    if (isAdmin) {
      dispatch({
        type: 'AUTHENTICATE_ADMIN',
        payload: {isAdmin},
      })
    }
  }

  return (
    <div css={PageStyles}>
      <form>
        <div css={InputWrapperStyles}>
          <label css={InputStyles} htmlFor='username' aria-hidden='true'>
            Username
          </label>
          <input
            css={InputStyles}
            type='text'
            name='username'
            id='username'
            placeholder='Enter Username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div css={InputWrapperStyles}>
          <label css={InputStyles} htmlFor='password' aria-hidden='true'>
            Password
          </label>
          <input
            css={InputStyles}
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
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
              <BsCapslockFill aria-hidden='true' />
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
