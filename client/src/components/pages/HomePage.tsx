const splashContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 'calc(100vh - 64px)',
    fontFamily: 'Raleway',
  } as const

export const HomePage = () => {
    return (
        <div css={splashContainerStyles} >
            <div style={{width: '100px', height: '164px'}}>
                <img src="/bloggy.svg" alt="Bloggy logo" />
            </div>
            <h1>Make a Blog!</h1>
        </div>
    )
}
