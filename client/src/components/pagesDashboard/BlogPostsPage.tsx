import {useContext} from 'react'

import {Login} from '@/components/login/LoginForm'
import {PageWrapperDashboard} from '@/components/pagesDashboard/PageWrapperDashboard'
import {AdminUserContext} from '@/contexts/AdminUserContext'

export const BlogPostsPage: React.FC = () => {
  const {state, dispatch} = useContext(AdminUserContext)
  console.log('BlogPostsPage -- isAdmin:', state.isAdmin)

  if (!state.isAdmin) {
    return <Login />
  }

  return (
    <PageWrapperDashboard>
      <div>List of Blog Posts</div>
    </PageWrapperDashboard>
  )
}
