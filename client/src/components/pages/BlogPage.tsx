import {CSSObject} from '@emotion/react'

import {FOOTER_HEIGHT, NAV_HEIGHT, PageWrapperBlog} from './PageWrapperBlog'

const ContainerStyles: CSSObject = {
  height: `calc(100vh - ${NAV_HEIGHT + FOOTER_HEIGHT}px)`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Raleway',
  padding: '20px',
}

export const BlogPage = () => {
  return (
    <>
      <PageWrapperBlog>
        <main css={ContainerStyles}>
          <h1>THE BLOG</h1>
        </main>
      </PageWrapperBlog>
    </>
  )
}
