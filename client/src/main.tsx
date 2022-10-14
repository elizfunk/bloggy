import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import App from './App'
import { AboutPage } from './components/pages/AboutPage'
import {BlogPage} from './components/pages/BlogPage'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
