import {CSSObject} from '@emotion/react'
import axios from 'axios'
import {useContext, useEffect} from 'react'

import Editor from '@/components/editor/Editor'
import {Login} from '@/components/login/LoginForm'
import {PageWrapperDashboard} from '@/components/pagesDashboard/PageWrapperDashboard'
import {AdminUserContext} from '@/contexts/AdminUserContext'
import {BlogPostEditorPageProvider} from '@/contexts/BlogPostEditorPageContext'

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

export const BlogPostEditorPage = () => {
  const {state, dispatch} = useContext(AdminUserContext)

  // TODO: Add loading state (otherwise the login flickers)
  // TODO: Ensure that cookie expires and page logs out after 24 hours or sooner

  // console.log('editor page state:', state)

  useEffect(() => {
    if (!state.isAdmin) {
      const checkIfLoggedIn = async () => {
        const res = await axios.get('/api/loginstatus')
        if (res?.data?.isAdmin) {
          dispatch({
            type: 'AUTHENTICATE_ADMIN',
            payload: {isAdmin: true},
          })
        }
        // console.log('res for login status:', res)
      }
      checkIfLoggedIn()
    }
  }, [state])

  if (!state.isAdmin) {
    return <Login />
  }

  return (
    <PageWrapperDashboard>
      <div css={OutsideWrapperStyles}>
        <BlogPostEditorPageProvider>
          <Editor />
        </BlogPostEditorPageProvider>
      </div>
    </PageWrapperDashboard>
  )
}
