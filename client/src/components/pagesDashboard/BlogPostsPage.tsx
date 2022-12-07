import {CSSObject} from '@emotion/react'
import axios from 'axios'
import {useContext, useEffect, useState} from 'react'

import {Login} from '@/components/login/LoginForm'
import {PageWrapperDashboard} from '@/components/pagesDashboard/PageWrapperDashboard'
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

const ContainerStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '700px',
  fontFamily: 'Raleway',
  padding: '36px',
}

// TODO: type API response
export const BlogPostsPage: React.FC = () => {
  const {state, dispatch} = useContext(AdminUserContext)
  console.log('BlogPostsPage -- isAdmin:', state.isAdmin)
  const [posts, setPosts] = useState<{}[]>([])

  useEffect(() => {
    if (!state.isAdmin) {
      // axios get request for session status isAdmin?
      const checkIfLoggedIn = async () => {
        const res = await axios.get('/api/loginstatus')
        console.log('res for login status:', res)
      }
      checkIfLoggedIn()
    }
    if (state.isAdmin) {
      const getPosts = async () => {
        const res = await axios.get('/api/dashboard/posts')
        console.log('res:', res)
        setPosts(res.data)
      }

      getPosts()
    }
  }, [state])

  if (!state.isAdmin) {
    return <Login />
  }

  return (
    <PageWrapperDashboard>
      <div css={OutsideWrapperStyles}>
        <div css={ContainerStyles}>
          <h1>List of Blog Posts</h1>
          <>
            {posts.length &&
              posts.map((item) => {
                if (item.title) {
                  return <div key={item.post_id}>{item.title}</div>
                }
              })}
          </>
        </div>
      </div>
    </PageWrapperDashboard>
  )
}
