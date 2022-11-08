import {CSSObject} from '@emotion/react'

import {FOOTER_HEIGHT, NAV_HEIGHT, PageWrapperBlog} from './PageWrapperBlog'

const OutsideWrapperStyles: CSSObject = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

const ContainerStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: `calc(100vh - ${NAV_HEIGHT + FOOTER_HEIGHT}px)`,
  maxWidth: '700px',
  fontFamily: 'Raleway',
  padding: '36px',
}

const TextContainerStyles: CSSObject = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
}

export const AboutPage = () => {
  return (
    <>
      <PageWrapperBlog>
        <main css={OutsideWrapperStyles}>
          <div css={ContainerStyles}>
            <h1>About Me</h1>
            <div css={TextContainerStyles}>
              <p>
                This is some information about me. This is what I do for a
                living. This is where I worked in the past.
              </p>
              <p>
                These are some of my hobbies and interests. This is where I
                live.
              </p>
              <p>
                These are some things that I care about and think are important.
              </p>
              <p>
                This is an explanation about my blog and its purpose. This is
                information on what else can be found on this site including a
                few links.
              </p>
              <p>
                Follow me on <a href='https://twitter.com/elizfunk'>twitter</a>.
              </p>
            </div>
          </div>
        </main>
      </PageWrapperBlog>
    </>
  )
}
