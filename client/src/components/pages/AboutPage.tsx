import {NavBar} from '../navigation/NavBar'

const outsideWrapperStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100vh - 64px)',
  maxWidth: '700px',
  fontFamily: 'Raleway',
  padding: '36px',
} as const

const textContainerStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
} as const

export const AboutPage = () => {
  return (
    <>
      <NavBar />
      <main css={outsideWrapperStyles}>
        <div css={containerStyles}>
          <h1>About Me</h1>
          <div css={textContainerStyles}>
            <p>
              This is some information about me. This is what I do for a living.
              This is where I worked in the past.
            </p>
            <p>
              These are some of my hobbies and interests. This is where I live.
            </p>
            <p>
              These are some things that I care about and think are important.
            </p>
            <p>
              This is an explanation about my blog and its purpose. This is
              information on what else can be found on this site including a few
              links.
            </p>
            <p>Follow me on <a href="https://twitter.com/elizfunk">twitter</a>.</p>
          </div>
        </div>
      </main>
    </>
  )
}
