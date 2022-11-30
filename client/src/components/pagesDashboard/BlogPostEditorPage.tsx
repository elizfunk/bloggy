import {CSSObject} from '@emotion/react'
import {useContext} from 'react'

import Editor from '@/components/editor/Editor'
import {Login} from '@/components/login/LoginForm'
import {PageWrapperDashboard} from '@/components/pagesDashboard/PageWrapperDashboard'
import {Button} from '@/components/ui/Button'
import {AdminUserContext} from '@/contexts/AdminUserContext'

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
