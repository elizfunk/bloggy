import {useContext} from 'react'

import {PageWrapperDashboard} from './PageWrapperDashboard'
import {Login} from '../login/LoginForm'
import {AdminUserContext} from '../../contexts/AdminUserContext'

export const BlogPostsPage: React.FC = () => {
  const {state, dispatch} = useContext(AdminUserContext)
  console.log('BlogPostsPage -- isAdmin:', state.isAdmin)

  if (!state.isAdmin) {
    return <Login adminUserContext={{state, dispatch}} />
  }

  return (
    <PageWrapperDashboard>
      <div>List of Blog Posts</div>
    </PageWrapperDashboard>
  )
}
