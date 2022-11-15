import {useContext} from 'react'

import {CSSObject} from '@emotion/react'

import Editor from '../editor/Editor'
import {PageWrapperDashboard} from './PageWrapperDashboard'
import {Login} from '../login/LoginForm'
import {AdminUserContext} from '../../contexts/AdminUserContext'
import {Button} from '../ui/Button'

const OutsideWrapperStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '400px',
  width: '100%',
  textAlign: 'center',
  fontFamily: 'Raleway',
  padding: '20px',
}

const ButtonWrapper: CSSObject = {
  display: 'flex',
  justifyContent: 'flex-end',
}

export const BlogPostEditorPage = () => {
  const {state} = useContext(AdminUserContext)

  console.log('editor page state:', state)

  if (!state.isAdmin) {
    return <Login />
  }

  return (
    <PageWrapperDashboard>
      <div css={OutsideWrapperStyles}>
        <div>
          <h1>Title</h1>
          <Editor />
          <div css={ButtonWrapper}>
            <Button
              buttonText='Save Changes'
              buttonStyle='Action'
              handleClick={() => {
                console.log('clicked Save Changes')
              }}
            />
          </div>
        </div>
      </div>
    </PageWrapperDashboard>
  )
}
