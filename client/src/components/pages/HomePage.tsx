import {FOOTER_HEIGHT, NAV_HEIGHT, PageWrapperBlog} from './PageWrapperBlog'

const SplashContainerStyles = {
  height: `calc(100vh - ${NAV_HEIGHT + FOOTER_HEIGHT}px)`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Raleway',
} as const

export const HomePage = () => {
  return (
    <>
      <PageWrapperBlog>
        <main css={SplashContainerStyles}>
          <div style={{width: '100px', height: '164px'}}>
            <img src='/bloggy.svg' alt='Bloggy logo' />
          </div>
          <h1>Make a Blog!</h1>
        </main>
      </PageWrapperBlog>
    </>
  )
}
