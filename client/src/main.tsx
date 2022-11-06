import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {AboutPage} from './components/pages/AboutPage'
import {BlogPage} from './components/pages/BlogPage'
import {HomePage} from './components/pages/HomePage'
import {BlogPostsPage} from './components/pagesDashboard/BlogPostsPage'
import {BlogPostEditorPage} from './components/pagesDashboard/BlogPostEditorPage'
import BlogPostEditorPageRT from './components/pagesDashboard/BlogPostEditorPageRT'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/dashboard',
    element: <BlogPostsPage />,
  },
  {
    path: '/dashboard/posts',
    element: <BlogPostsPage />,
  },
  {
    path: '/dashboard/edit-post',
    element: <BlogPostEditorPage />,
  },
  {
    path: '/dashboard/edit-post-rt',
    element: <BlogPostEditorPageRT />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
