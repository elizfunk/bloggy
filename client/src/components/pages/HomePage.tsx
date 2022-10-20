import {NavBar} from '../navigation/NavBar'

const splashContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 64px)',
  fontFamily: 'Raleway',
} as const

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div css={splashContainerStyles}>
        <div style={{width: '100px', height: '164px'}}>
          <img src="/bloggy.svg" alt="Bloggy logo" />
        </div>
        <h1>Make a Blog!</h1>
      </div>
    </>
  )
}
