import {PageWrapperDashboard} from './PageWrapperDashboard'
import {Login} from '../login/LoginForm'

export const BlogPostsPage: React.FC = () => {
  const loggedIn = false

  if (!loggedIn) {
    return <Login />
  }
  return (
    <PageWrapperDashboard>
      <div>List of Blog Posts</div>
    </PageWrapperDashboard>
  )
}
